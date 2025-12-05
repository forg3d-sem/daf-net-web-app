import React, {useState} from 'react';
import {Dropdown, Modal, Spinner} from "react-bootstrap";
import useCreatePost from "../../Hooks/Posts/useCreatePost.ts";
import type {CategoryResponse} from "../../../APIs";
import {notificationActions} from "../../store/slices/NotificationSlice.ts";
import {useQueryClient} from "@tanstack/react-query";
import {useAppDispatch} from "../../store/storeHooks.ts";
import Cross from '../../assets/close-modal-cross.svg';

interface CreateNews {
    showModal: boolean;
    handleHideModal: () => void;
    categories: CategoryResponse[];
    refetch: () => void;
}

const CreateNews:React.FC<CreateNews> = (props) => {

    const {showModal, handleHideModal, categories} = props;

    const queryClient = useQueryClient();
    const dispatch = useAppDispatch();

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<CategoryResponse | null>(null);

    const {mutate, isPending} = useCreatePost();

    const handleCreatePost = () => {
        mutate({content: text, title: title, categoryId: selectedCategory?.id}, {
            onSuccess: () => {
                handleHideModal();
                queryClient.invalidateQueries({queryKey: ['posts', selectedCategory?.id]});
                queryClient.refetchQueries({queryKey: ['posts', selectedCategory?.id]});
                dispatch(notificationActions.setNotification({text: "News post submitted successfully!", type: 'success'}));
            },
            onError: (error) => {
                dispatch(notificationActions.setNotification({text: error.message, type: 'error'}));
            }
        })
    }

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
                                        categories.map(c =>
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
                        <textarea
                            name="content"
                            cols={30}
                            rows={10}
                            id='post-content'
                            className='input-border'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        ></textarea>
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