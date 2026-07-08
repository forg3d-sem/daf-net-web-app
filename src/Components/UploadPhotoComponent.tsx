import React, {type ChangeEvent, useState} from 'react';
import {useAppDispatch} from "../store/storeHooks.ts";
import useAddAttachment from "../Hooks/Attachments/useAddAttachment.ts";
import {notificationActions} from "../store/slices/NotificationSlice.ts";
import {Spinner} from "react-bootstrap";
import Bin from "../assets/delete_bin.svg";
import './ForumComponents/forumStyles.scss'

interface UploadPhotoComponent {
    handleAttachment: (id: string | null) => void;
    addBtnText: string;
    changeBtnText: string
}

const UploadPhotoComponent:React.FC<UploadPhotoComponent> = ({handleAttachment, addBtnText, changeBtnText}) => {

    const apiUrl = import.meta.env.VITE_API_URL;

    const dispatch = useAppDispatch();

    const [attachmentFile, setAttachmentFile] = useState<undefined | File>(undefined);

    const {mutate: addAttachment, data, isPending: isUploading} = useAddAttachment();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {

        const files = e.target.files;

        if (!files) {
            return
        }

        if (files?.length > 0) {
            setAttachmentFile(files[0])
            addAttachment(files[0], {
                onSuccess: (data) => {

                    const url = data?.data?.data?.url ? `${apiUrl}${data?.data?.data?.url}` : '';

                    handleAttachment(url)

                },
                onError: (error) => {
                    handleAttachment(null);
                    dispatch(notificationActions.setNotification({type: 'error', text: error.message}))
                }
            })
            return
        }

        setAttachmentFile(undefined);

    }

    const handleDeleteAttachment = () => {
        setAttachmentFile(undefined);
        handleAttachment(null);
    }

    return (
        <div className="image-upload image-upload--photo">
            <label htmlFor="image_upload" className={attachmentFile && "label-with-file"}>
                {
                    isUploading
                    &&
                    <Spinner className='image-upload-spinner'/>
                }
                {
                    !isUploading &&
                    <span>
                        {
                            attachmentFile
                                ?
                                changeBtnText
                                :
                                addBtnText
                        }
                    </span>
                }
            </label>
            <input
                id="image_upload"
                type="file"
                onChange={handleFileChange}
                placeholder='Select Photo'
            />
            <div className='file-data'>
                {
                    data &&
                    <button
                        className='delete-image-button'
                        onClick={handleDeleteAttachment}
                    >
                        <img src={Bin} alt="bin icon"/>
                    </button>
                }
            </div>
        </div>
    );
};

export default UploadPhotoComponent;