import React, {useCallback, useState} from 'react';
import {
    // Dropdown,
    Modal, Spinner} from "react-bootstrap";
import useCreatePost from "../../Hooks/Posts/useCreatePost.ts";
import {notificationActions} from "../../store/slices/NotificationSlice.ts";
import {useQueryClient} from "@tanstack/react-query";
import {useAppDispatch} from "../../store/storeHooks.ts";
import Cross from '../../assets/close-modal-cross.svg';
import PhotoAttachmentComponent from "./PhotoAttachmentComponent.tsx";
import JoditEditor from "jodit-react";

interface CreateNews {
    showModal: boolean;
    handleHideModal: () => void;
}

const attachmentTypes = [
    {
        type: 'none',
        label: 'No attachment'
    },
    {
        type: 'photo',
        label: 'Photo'
    }
]

const newsId = "11111111-0000-0000-0000-000000000001";

const CreateNews:React.FC<CreateNews> = (props) => {

    const {showModal, handleHideModal} = props;

    const queryClient = useQueryClient();
    const dispatch = useAppDispatch();

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [attachmentType, setAttachmentType] = useState('none');
    const [attachId, setAttachId] = useState<null | string>(null);
    console.log(attachId);

    const {mutate, isPending} = useCreatePost();

    const handleCreatePost = () => {
        mutate({content: text, title: title, categoryId: newsId, attachmentId: attachId}, {
            onSuccess: (r) => {
                console.log(r)
                handleHideModal();
                queryClient.invalidateQueries({queryKey: ['posts', newsId]});
                dispatch(notificationActions.setNotification({text: "News post submitted successfully!", type: 'success'}));
            },
            onError: (error) => {
                dispatch(notificationActions.setNotification({text: error.message, type: 'error'}));
            }
        })
    }

    const handleAttachmentIdChange = useCallback((value: string | null) => {
        setAttachId(value)
    }, [])

    return (
            <Modal show={showModal} onHide={handleHideModal} className='create-content-modal'>
                <Modal.Header>
                    <h4>Create News</h4>
                    <button className='close-btn d-block d-md-none' onClick={handleHideModal}>
                        <img src={Cross} alt=""/>
                    </button>
                    <button
                        className='d-none d-md-block'
                        onClick={handleCreatePost}
                    >
                        {
                            isPending
                                ?
                                <Spinner animation='border'/>
                                :
                                'Publish'
                        }
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-input-group">
                        <label htmlFor="post-title">Title</label>
                        <input
                            type="text"
                            id='post-title'
                            className='input-border'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    {/*<div className="modal-input-group">*/}
                    {/*    <label htmlFor="cat-selector">Category</label>*/}
                    {/*    <div className="dropdown-group">*/}
                    {/*        <Dropdown id='cat-selector'>*/}
                    {/*            <Dropdown.Toggle className='dropdown-btn'>*/}
                    {/*                {*/}
                    {/*                    selectedCategory*/}
                    {/*                        ?*/}
                    {/*                        selectedCategory.name*/}
                    {/*                        :*/}
                    {/*                        'Select a category'*/}
                    {/*                }*/}
                    {/*            </Dropdown.Toggle>*/}

                    {/*            <Dropdown.Menu>*/}
                    {/*                {*/}
                    {/*                    categories.map(c =>*/}
                    {/*                        <Dropdown.Item key={c.id}*/}
                    {/*                                       onClick={() => setSelectedCategory(c)}>{c.name}</Dropdown.Item>*/}
                    {/*                    )*/}
                    {/*                }*/}
                    {/*            </Dropdown.Menu>*/}
                    {/*        </Dropdown>*/}
                    {/*        <button className='create-cat-btn' disabled>Create category</button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="modal-input-group attachment-type">
                        {
                            attachmentTypes.map(type => <button
                                className={type.type === attachmentType ? 'attachment-button selected' : 'attachment-button'}
                                key={type.type} onClick={() => setAttachmentType(type.type)}>{type.label}</button>)
                        }
                    </div>
                    {
                        attachmentType === 'photo'
                        &&
                        <PhotoAttachmentComponent
                            handleAttachment={handleAttachmentIdChange}
                        />
                    }
                    
                    <div className="modal-input-group">
                        <label htmlFor="post-content">Text</label>
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
                        onClick={handleCreatePost}
                    >
                        {
                            isPending
                                ?
                                <Spinner animation='border'/>
                                :
                                'Publish'
                        }
                    </button>
                </Modal.Body>
            </Modal>
    );
};

export default CreateNews;