import React, {type ChangeEvent, useEffect, useState} from 'react';
import {useAppDispatch} from "../../store/storeHooks.ts";
import useAddAttachment from "../../Hooks/Attachments/useAddAttachment.ts";
import {notificationActions} from "../../store/slices/NotificationSlice.ts";
import {Spinner} from "react-bootstrap";
import Bin from "../../assets/delete_bin.svg";
import '../ForumComponents/forumStyles.scss';

interface AddGroupImage {
    handleImageLink: (link: string | null) => void;
}

const AddGroupImage:React.FC<AddGroupImage> = ({handleImageLink}) => {

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
            return
        }

        setAttachmentFile(undefined);

    }

    const handleDeleteAttachment = () => {
        setAttachmentFile(undefined);
        handleImageLink(null);
    }

    useEffect(() => {

        if (!attachmentFile) {
            return
        }

        addAttachment(attachmentFile, {
            onSuccess: (data) => {

                const url = data?.data?.data?.url ?? '';
                handleImageLink(url)

            },
            onError: (error) => {
                handleImageLink(null);
                dispatch(notificationActions.setNotification({type: 'error', text: error.message}))
            }
        })

    }, [attachmentFile, addAttachment, dispatch, handleImageLink]);

    return (
        <div className="image-upload">
            <label htmlFor="image_upload" className={attachmentFile && "label-with-file"}>
                {
                    isUploading
                    &&
                    <Spinner className='image-upload-spinner'/>
                }
                {
                    !isUploading &&
                    <span>
                        Select photo
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

export default AddGroupImage;