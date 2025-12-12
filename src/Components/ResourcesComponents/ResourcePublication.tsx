import React, {useCallback, useState} from 'react';
import {useQueryClient} from "@tanstack/react-query";
import {useAppDispatch} from "../../store/storeHooks.ts";
// import type {CategoryResponse} from "../../../APIs";
import {
    // Dropdown,
    Modal, Spinner} from "react-bootstrap";
import {notificationActions} from "../../store/slices/NotificationSlice.ts";
import useCreatePost from "../../Hooks/Posts/useCreatePost.ts";
import '../ForumComponents/forumStyles.scss';
import Cross from "../../assets/close-modal-cross.svg";
import JoditEditor from "jodit-react";
import AddAttachmentComponent from "../NewsComponents/AddAttachmentComponent.tsx";

// interface CreateResource {
//     categories: CategoryResponse[];
// }

const attachmentTypes = [
    {
        type: 'none',
        label: 'No attachment'
    },
    {
        type: 'attachment',
        label: 'Attachment'
    }
]

const resId = "22222222-0000-0000-0000-000000000001";

const ResourcePublication:React.FC = () => {

    const queryClient = useQueryClient();
    const dispatch = useAppDispatch();

    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    // const [selectedCategory, setSelectedCategory] = useState<CategoryResponse | null>(null);
    const [attachmentType, setAttachmentType] = useState('none');
    const [attachId, setAttachId] = useState<null | string>(null);

    const handleAttachmentIdChange = useCallback((value: string | null) => {
        setAttachId(value)
    }, [])

    const resetValues = () => {
        setTitle('');
        setText('');
        setAttachId(null);
    }

    const {mutate, isPending} = useCreatePost();

    const handleCreatePost = () => {
        mutate({content: text, title: title, categoryId: resId, attachmentId: attachId}, {
            onSuccess: () => {
                setShowModal(false);
                queryClient.invalidateQueries({queryKey: ['posts', resId]});
                dispatch(notificationActions.setNotification({text: "Resource submitted successfully!", type: 'success'}));
                resetValues();
            },
            onError: (error) => {
                dispatch(notificationActions.setNotification({text: error.message, type: 'error'}));
                resetValues();
            }
        })
    }

    return (
        <>
            <div className="resource-publication-section">
                <h4>Publication of a resource</h4>
                <p>
                    You can submit a resource to help us create agroforestry related knowledge base.
                </p>
                <button onClick={() => setShowModal(true)}>
                    Create Resource
                </button>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)} className='create-content-modal'>
                <Modal.Header>
                    <h4>Create Resource</h4>
                    <button className='close-btn d-block d-md-none' onClick={() => setShowModal(false)}>
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
                    {/*                    props.categories.map(c =>*/}
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
                        attachmentType === 'attachment'
                        &&
                        <AddAttachmentComponent
                            handleAttachment={handleAttachmentIdChange}
                            addBtnText={'Add'}
                            changeBtnText={'Change'}
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
                                buttons: ['bold', 'italic', 'underline', 'strikethrough', 'ul', 'ol', 'link', 'unlink', 'image', 'video'],
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
        </>
    );
};

export default ResourcePublication;