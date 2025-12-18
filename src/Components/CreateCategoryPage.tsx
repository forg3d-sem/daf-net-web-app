import React, {useState} from 'react';
import {Col, Container, Row, Spinner} from "react-bootstrap";
import BackArrow from "../assets/back-arrow.svg";
import useFetchCategories from "../Hooks/Categories/useFetchCategories.ts";
import useAddCategory from "../Hooks/Categories/useAddCategory.ts";
import {useAppDispatch} from "../store/storeHooks.ts";
import {useQueryClient} from "@tanstack/react-query";
import {notificationActions} from "../store/slices/NotificationSlice.ts";

interface CreateCategoryPage {
    groupId: string;
}

const CreateCategoryPage: React.FC<CreateCategoryPage> = ({groupId}) => {

    const dispatch = useAppDispatch()

    const queryClient = useQueryClient();

    const [category, setCategory] = useState('')

    const {data, isLoading, error} = useFetchCategories(groupId, '', 1);

    const {mutate, isPending} = useAddCategory(groupId);

    const handleAddCategory = () => {
        mutate(category, {
            onSuccess: () => {
                dispatch(notificationActions.setNotification({type: 'success', text: "Category added"}))
                setCategory('')
                queryClient.invalidateQueries({queryKey: ['categories']})
            },
            onError: () => {
                dispatch(notificationActions.setNotification({type: 'error', text: "Failed to add category"}))
            }
        })
    }

    return (
        <Container>
            <Row>
                <Col>
                    <a className='post-back-btn' href='#' onClick={() => history.back()}>
                        <img src={BackArrow} alt="Back"/>
                        <span>Back</span>
                    </a>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col lg={8} className='create-cat-page'>
                    <div className="create-category">
                        <div className="create-category__top">
                            <h1>
                                Create category
                            </h1>
                            <button
                                onClick={handleAddCategory}
                                disabled={isPending}
                            >
                                {
                                    isPending
                                        ?
                                        <Spinner animation='border'/>
                                        :
                                        "Save"
                                }
                            </button>
                        </div>
                        <p>
                            Before creating a category, make sure it is unique and does not have duplicate categories
                        </p>
                        <div className="create-category__input-group">
                            <label htmlFor="cat-input">Category Name</label>
                            <input
                                value={category}
                                onChange={e => setCategory(e.target.value)}
                                type="text"
                                id='cat-input'
                                placeholder='category name'
                            />
                        </div>
                    </div>

                    <div className="list-title">
                        List of Categories
                    </div>
                    {
                        isLoading &&
                        <div className='w-100 d-flex justify-content-center'>
                            <Spinner animation='border'/>
                        </div>
                    }
                    {
                        (data?.data?.data?.categories && data?.data?.data?.categories.length > 0 && !isLoading && !error) &&
                        <ul className='cat-list'>
                            {
                                data.data.data.categories.map(c => <li key={c.id}>{c.name}</li>)
                            }
                        </ul>
                    }
                    {
                        (data?.data?.data?.categories && data?.data?.data?.categories.length === 0 && !isLoading && !error) &&
                        <div className='w-100 d-flex justify-content-center message'>
                            There are no categories for this group.
                        </div>
                    }
                    {
                        (error && !isLoading) &&
                        <div className='w-100 d-flex justify-content-center message'>
                            {error.message}
                        </div>
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default CreateCategoryPage;