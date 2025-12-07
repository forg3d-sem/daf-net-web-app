import React, {useState} from 'react';
import Emoji from '../../assets/create-post-emoji.png';
import {Dropdown, Modal, Spinner} from "react-bootstrap";
import type {CategoryResponse} from "../../../APIs";
import useCreatePost from "../../Hooks/Posts/useCreatePost.ts";
import {useQueryClient} from "@tanstack/react-query";
import {useAppDispatch} from "../../store/storeHooks.ts";
import {notificationActions} from "../../store/slices/NotificationSlice.ts";
import Cross from "../../assets/close-modal-cross.svg";
import JoditEditor from "jodit-react";
import DOMPurify from 'dompurify';

interface CreatePostBanner {
    categories: CategoryResponse[];
    refetch: () => void;
}

const CreatePostBanner: React.FC<CreatePostBanner> = (props) => {

    const queryClient = useQueryClient();
    const dispatch = useAppDispatch();

    const [showModal, setShowModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<CategoryResponse | null>(null);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const resetValues = () => {
        setTitle('');
        setText('');
        setSelectedCategory(null);
    }

    const {mutate, isPending} = useCreatePost()

    const handleShowModal = () => {
        setShowModal(true)
    }
    const handleHideModal = () => {
        setShowModal(false)
    }

    const handleCreatePost = () => {

        const purified = DOMPurify.sanitize(text);

        mutate({content: purified, title: title, categoryId: selectedCategory?.id}, {
            onSuccess: () => {
                handleHideModal();
                queryClient.invalidateQueries({queryKey: ['posts', selectedCategory?.id]});
                props.refetch();
                dispatch(notificationActions.setNotification({text: "Post submitted successfully!", type: 'success'}));
            },
            onError: (error) => {
                dispatch(notificationActions.setNotification({text: error.message, type: 'error'}));
            },
            onSettled: () => {
                resetValues();
            }
        })
    }

    return (
        <>
            <div className='create-post-banner'>
                <div className="banner-left">
                    <div className="emoji-wrap">
                        <img src={Emoji} alt="create post emoji"/>
                    </div>
                    <span>
                    Let’s share what’s going on your mind...
                </span>
                </div>
                <button
                    onClick={handleShowModal}
                >
                    Create Post
                </button>
            </div>
            <Modal show={showModal} onHide={handleHideModal} className='create-content-modal'>
                <Modal.Header>
                    <h4>Create Forum Post</h4>
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
                    <div className="modal-input-group">
                        <label htmlFor="cat-selector">Category</label>
                        <div className="dropdown-group">
                            <Dropdown id='cat-selector'>
                                <Dropdown.Toggle className='dropdown-btn'>
                                    {
                                        selectedCategory
                                            ?
                                            selectedCategory.name
                                            :
                                            'Select a category'
                                    }
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {
                                        props.categories.map(c =>
                                            <Dropdown.Item key={c.id}
                                                           onClick={() => setSelectedCategory(c)}>{c.name}</Dropdown.Item>
                                        )
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                            <button className='create-cat-btn' disabled>Create category</button>
                        </div>
                    </div>
                    <div className="modal-input-group">
                        <label htmlFor="post-content">Text</label>
                        <JoditEditor
                            value={text}
                            tabIndex={1}
                            onBlur={content => setText(content)}
                            config={{
                                placeholder: "Write something",
                                height: 300,
                                buttons:['bold', 'italic', 'underline', 'strikethrough', 'ul', 'ol', 'link', 'unlink'],
                                toolbarAdaptive: false,
                                readonly: false
                            }}
                        />
                        {/*<textarea*/}
                        {/*    name="content"*/}
                        {/*    cols={30}*/}
                        {/*    rows={10}*/}
                        {/*    id='post-content'*/}
                        {/*    className='input-border'*/}
                        {/*    value={text}*/}
                        {/*    onChange={(e) => setText(e.target.value)}*/}
                        {/*></textarea>*/}
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

export default CreatePostBanner;