import React, {useCallback, useState} from 'react';
import {
    // Dropdown,
    Modal, Spinner} from "react-bootstrap";
import {notificationActions} from "../../store/slices/NotificationSlice.ts";
import {useQueryClient} from "@tanstack/react-query";
import {useAppDispatch} from "../../store/storeHooks.ts";
import JoditEditor from "jodit-react";
import useCreateOrganization from "../../Hooks/Organizations/useCreateOrganization.ts";
import UploadPhotoComponent from "../UploadPhotoComponent.tsx";
import Cam from '../../assets/camera.svg';

interface CreateNews {
    showModal: boolean;
    handleHideModal: () => void;
}

const CreateNews:React.FC<CreateNews> = (props) => {

    const {showModal, handleHideModal} = props;

    const queryClient = useQueryClient();
    const dispatch = useAppDispatch();

    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [url, setUrl] = useState('');
    const [image, setImage] = useState<string | null>('');

    const {mutate, isPending} = useCreateOrganization();

    const handleSubmitOrganization = () => {
        mutate({description: text, name: name, imageUrl: image, url: url}, {
            onSuccess: (r) => {
                console.log(r)
                handleHideModal();
                queryClient.invalidateQueries({queryKey: ['organizations']});
                dispatch(notificationActions.setNotification({text: "Thank you for submitting your organization!", type: 'success'}));
            },
            onError: (error) => {
                dispatch(notificationActions.setNotification({text: error.message, type: 'error'}));
            }
        })
    }

    const handleImageChange = useCallback((value: string | null) => {
        setImage(value)
    }, [])

    return (
        <Modal show={showModal} onHide={handleHideModal} className='create-content-modal'>
            <Modal.Header className='create-organization-header'>
                <div className="header-text">
                    <h4>Create Organization</h4>
                    <p>
                        Thanks for submitting your  organisation, we’ll get back to you shortly
                    </p>
                </div>

                <button
                    className='d-none d-md-block'
                    onClick={handleSubmitOrganization}
                >
                    {
                        isPending
                            ?
                            <Spinner animation='border'/>
                            :
                            'Submit'
                    }
                </button>
            </Modal.Header>
            <Modal.Body>
                <div className="modal-input-group modal-input-group--photo">
                    {
                        image
                        ?
                            <img className='image-preview' src={image ?? ''} alt=""/>
                            :
                            <div className='image-preview-empty'>
                                <img src={Cam} alt=""/>
                            </div>
                    }

                    <UploadPhotoComponent
                        handleAttachment={handleImageChange}
                        changeBtnText='Change photo'
                        addBtnText='Change photo'
                    />
                </div>
                <div className="modal-input-group">
                    <label htmlFor="org-name">Title</label>
                    <input
                        type="text"
                        id='org-name'
                        className='input-border'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="modal-input-group">
                    <label htmlFor="org-link">Link</label>
                    <input
                        type="url"
                        id='org-link'
                        className='input-border'
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </div>
                <div className="modal-input-group">
                    <label htmlFor="org-desc">Description</label>
                    <JoditEditor
                        value={text}
                        tabIndex={1}
                        onBlur={content => setText(content)}
                        config={{
                            placeholder: "Write something",
                            height: 300,
                            buttons: ['bold', 'italic', 'underline', 'strikethrough', 'ul', 'ol', 'link', 'unlink'],
                            toolbarAdaptive: false,
                            readonly: false
                        }}
                    />
                </div>
                <button
                    className='d-block d-md-none publish-btn'
                    onClick={handleSubmitOrganization}
                >
                    {
                        isPending
                            ?
                            <Spinner animation='border'/>
                            :
                            'Submit'
                    }
                </button>
            </Modal.Body>
        </Modal>
    );
};

export default CreateNews;