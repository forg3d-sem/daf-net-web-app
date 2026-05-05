import React, {useEffect, useState} from 'react';
import {Button, Dropdown, Modal, Spinner} from "react-bootstrap";
import Cross from "../../assets/close-modal-cross.svg";
import {nanoid} from "nanoid/non-secure";
import RemoveOption from "../../assets/remove-survey-option.svg";
import JoditEditor from "jodit-react";
import {useQueryClient} from "@tanstack/react-query";
import {useAppDispatch, useAppSelector} from "../../store/storeHooks.ts";
import useCreatePost from "../../Hooks/Posts/useCreatePost.ts";
import DOMPurify from "dompurify";
import {notificationActions} from "../../store/slices/NotificationSlice.ts";
import type {CategoryResponse} from "../../../APIs";
import '../ForumComponents/forumStyles.scss';
import {useNavigate} from "@tanstack/react-router";
import {postPersistActions} from "../../store/slices/PostPersistSlice.ts";

interface GroupPostCreate {
    categories: CategoryResponse[];
    showModal: boolean;
    hideModal: () => void;
    groupId: string;
}

const attachmentTypes:{type: 'none' | 'survey', label: string}[] = [
    {
        type: 'none',
        label: 'No attachment'
    },
    {
        type: 'survey',
        label: 'Survey'
    }
]

const GroupPostCreate: React.FC<GroupPostCreate> = ({showModal, hideModal, categories, groupId}) => {

    const queryClient = useQueryClient();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const persistedData = useAppSelector(state => state.postPersistObj.obj);

    const [selectedCategory, setSelectedCategory] = useState<CategoryResponse | null>(persistedData?.selectedCategory ?? null);
    const [title, setTitle] = useState(persistedData?.title ?? '');
    const [text, setText] = useState(persistedData?.text ?? '');
    const [attachmentType, setAttachmentType] = useState(persistedData?.attachmentType ?? 'none');
    const [surveyOptions, setSurveyOptions] = useState<string[]>(persistedData?.surveyOptions ?? []);
    const [showAddInput, setShowAddInput] = useState(false);
    const [newSurveyOption, setNewSurveyOption] = useState('');

    const deleteSurveyValue = (value: string) => {
        setSurveyOptions(p => p.filter(o => o !== value))
    }
    const addSurveyValue = (value: string) => {
        setSurveyOptions(p => [value, ...p]);
    }

    const resetValues = () => {
        setTitle('');
        setText('');
        setSelectedCategory(null);
        setShowAddInput(false);
        setNewSurveyOption('');
        setSurveyOptions([]);
        setAttachmentType('none');
        dispatch(postPersistActions.resetValues())
    }

    const {mutate, isPending} = useCreatePost()

    const handleHideModal = () => {
        resetValues()
        hideModal()
    }

    const handleCreatePost = () => {

        const purified = DOMPurify.sanitize(text);

        mutate({
            content: purified,
            title: title,
            categoryId: selectedCategory?.id,
            survey: surveyOptions.length > 0 ? {question: '', options: surveyOptions} : undefined
        }, {
            onSuccess: () => {
                hideModal();
                queryClient.invalidateQueries({queryKey: ['posts', selectedCategory?.id]});
                queryClient.invalidateQueries({queryKey: ['allPosts']});
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

    const handleCreateCatNav = () => {
        dispatch(postPersistActions.setValues({
            title: title,
            text: text,
            tagsArray: [],
            attachmentType: attachmentType,
            surveyOptions: surveyOptions,
            selectedCategory: selectedCategory
        }));
        navigate({to: `/create-category/${groupId}`})
    }

    useEffect(() => {
        if (attachmentType !== 'survey') {
            setSurveyOptions([]);
            setNewSurveyOption('');
            setShowAddInput(false);
        }
    }, [attachmentType]);

    return (
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
                                    categories.map(c =>
                                        <Dropdown.Item key={c.id}
                                                       onClick={() => setSelectedCategory(c)}>{c.name}</Dropdown.Item>
                                    )
                                }
                                {categories.length === 0 &&
                                    <Dropdown.Item>No categories exist for this group</Dropdown.Item>
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button className='create-cat-btn' onClick={handleCreateCatNav}>Create category</Button>
                    </div>
                </div>
                <div className="modal-input-group attachment-type">
                    {
                        attachmentTypes.map(type => <button
                            className={type.type === attachmentType ? 'attachment-button selected' : 'attachment-button'}
                            key={type.type} onClick={() => setAttachmentType(type.type)}>{type.label}</button>)
                    }
                </div>
                {
                    attachmentType === 'survey'
                    &&
                    <div className="modal-input-group survey-list">
                        <label>Your survey</label>
                        {
                            surveyOptions.map(o =>
                                <div className='new-survey-option' key={nanoid()}>
                                    <span>{o}</span>
                                    <button onClick={() => deleteSurveyValue(o)}>
                                        <img src={RemoveOption} alt=""/>
                                    </button>
                                </div>
                            )
                        }
                        {
                            showAddInput
                                ?
                                <div className='new-option-wrapper'>
                                    <input type="text" value={newSurveyOption}
                                           onChange={e => {
                                               setNewSurveyOption(e.target.value)

                                           }}/>
                                    <button
                                        className='add-new-option-btn'
                                        onClick={() => {
                                            addSurveyValue(newSurveyOption)
                                            setNewSurveyOption('')
                                            setShowAddInput(false)
                                        }}>+
                                    </button>
                                </div>
                                :
                                <button
                                    className='add-survey-option-btn'
                                    onClick={() => setShowAddInput(true)}
                                >
                                    <div className='bordered-plus'>+</div>
                                    <div>
                                        add more options
                                    </div>
                                </button>
                        }
                    </div>
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

export default GroupPostCreate;