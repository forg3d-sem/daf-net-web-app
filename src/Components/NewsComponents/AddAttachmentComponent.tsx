import React, {type ChangeEvent, useEffect, useState} from 'react';
import useAddAttachment from "../../Hooks/Attachments/useAddAttachment.ts";
import Bin from '../../assets/delete_bin.svg';
import {useAppDispatch} from "../../store/storeHooks.ts";
import {notificationActions} from "../../store/slices/NotificationSlice.ts";
import {Spinner} from "react-bootstrap";

interface AddAttachmentComponent {
    handleAttachment: (id: string | null) => void;
    addBtnText: string;
    changeBtnText: string
}

const AddAttachmentComponent: React.FC<AddAttachmentComponent> = ({handleAttachment, addBtnText, changeBtnText}) => {

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
        handleAttachment(null);
    }

    useEffect(() => {

        if (!attachmentFile) {
            return
        }

        addAttachment(attachmentFile, {
            onSuccess: (data) => {

                const id = data?.data?.data?.attachmentId ?? '';

                handleAttachment(id)

            },
            onError: (error) => {
                handleAttachment(null);
                dispatch(notificationActions.setNotification({type: 'error', text: error.message}))
            }
        })

    }, [attachmentFile, addAttachment, dispatch, handleAttachment]);

    return (
        <div className="modal-input-group image-upload">
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
                    attachmentFile &&
                    <div className="image-file-name">
                        {attachmentFile.name}
                    </div>
                }
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

export default AddAttachmentComponent;