import React, {useState} from 'react';
import {useQueryClient} from "@tanstack/react-query";
import {useAppDispatch} from "../../store/storeHooks.ts";
import type {CategoryResponse} from "../../../APIs";
import {Dropdown, Modal, Spinner} from "react-bootstrap";
import {notificationActions} from "../../store/slices/NotificationSlice.ts";
import useCreatePost from "../../Hooks/Posts/useCreatePost.ts";
import '../ForumComponents/forumStyles.scss';
import Cross from "../../assets/close-modal-cross.svg";

interface CreateResource {
    categories: CategoryResponse[];
    refetch: () => void;
}

const ResourcePublication:React.FC<CreateResource> = (props) => {

    const queryClient = useQueryClient();
    const dispatch = useAppDispatch();

    const [showModal, setShowModal] = useState(false)
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<CategoryResponse | null>(null);

    const resetValues = () => {
        setTitle('');
        setText('');
        setSelectedCategory(null);
    }

    const {mutate, isPending} = useCreatePost();

    const handleCreatePost = () => {
        mutate({content: text, title: title, categoryId: selectedCategory?.id}, {
            onSuccess: () => {
                setShowModal(false);
                queryClient.invalidateQueries({queryKey: ['posts', selectedCategory?.id]});
                props.refetch();
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
                    You can submit a request to create a personal learning resource, and our administrator will review and publish it.
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
                        <button className='resource-type selected'>Text</button>
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
        </>
    );
};

export default ResourcePublication;