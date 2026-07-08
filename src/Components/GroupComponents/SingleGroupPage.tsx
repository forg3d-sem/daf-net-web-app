import React, {useEffect, useState} from 'react';
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import {type GroupResponse} from '../../../APIs';
import BackArrow from "../../assets/back-arrow.svg";
import './GroupsStyles.scss';
import GroupIcon from "../../assets/settings_group.svg";
import '../ForumComponents/forumStyles.scss'
import '../UserProfile/userProfileStyles.scss';
import GroupMembersList from "./GroupMembersList.tsx";
import GroupPostCreate from "./GroupPostCreate.tsx";
import useFetchCategories from "../../Hooks/Categories/useFetchCategories.ts";
import GroupLeaveButton from "./GroupLeaveButton.tsx";
import {useAppSelector} from "../../store/storeHooks.ts";
import GroupPosts from "./GroupPosts.tsx";
import useFetchAllPosts from "../../Hooks/Posts/useFetchAllPosts.ts";

interface SingleGroupPage {
    data: GroupResponse
}

const SingleGroupPage: React.FC<SingleGroupPage> = ({data}) => {

    const persistedData = useAppSelector(state => state.postPersistObj.obj);

    const [showCreatePost, setShowCreatePost] = useState(false);

    const {name, description, imageUrl, members, id} = data;

    const {data: allPosts} = useFetchAllPosts(id);

    //error and loading state are ignored, keep in mind that they need to be handled
    const {data: categories} = useFetchCategories(data.id ?? '', '', 1);

    const showModal = () => {
        setShowCreatePost(true);
    }

    const hideModal = () => {
        setShowCreatePost(false);
    }

    useEffect(() => {
        if (persistedData === null) {
            return
        }
        setShowCreatePost(true)
    }, []);


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
            <Row>
                <Col
                    lg={8}
                    className='group-content'
                >
                    <div className="group-content__info">
                        {
                            imageUrl
                                ?
                                <img
                                    className='group-content__logo'
                                    src={imageUrl}
                                    alt={`${name}`}
                                />
                                :
                                <div className='group-content__logo-placeholder'>
                                    <img src={GroupIcon} alt="Group icon placeholder"/>
                                </div>
                        }
                        <div className="group-content__text-data">
                            <h2>
                                {name}
                            </h2>
                            <span>
                                {description}
                            </span>
                        </div>
                    </div>
                    <div className="group-side-info group-side-info--mobile  d-block d-lg-none">
                        <h2>
                            {name}
                        </h2>
                        <div className="group-side-info__count-wrap">
                            <div className="group-side-info__count">
                                <div className="group-side-info__number">
                                    {allPosts?.data?.data?.totalCount ?? 'N/A'}
                                </div>
                                <div className="group-side-info__title">
                                    Discussions
                                </div>
                            </div>
                            <div className="group-side-info__count">
                                <div className="group-side-info__number">
                                    {members ?? 'N/A'}
                                </div>
                                <div className="group-side-info__title">
                                    Members
                                </div>
                            </div>
                        </div>
                        <button
                            className='create-post-btn'
                            onClick={showModal}
                        >
                            Create post
                        </button>
                        <GroupLeaveButton
                            isOwner={!!data.isOwner}
                            id={data.id}
                        />
                    </div>
                    <Tab.Container
                        defaultActiveKey='posts'
                    >
                        <Nav>
                            <Nav.Item>
                                <Nav.Link eventKey='posts'>Posts</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='members'>Members</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey='posts'>
                                <GroupPosts
                                    id={id ?? ''}
                                    categories={categories?.data?.data?.categories ?? []}
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey='members'>
                                <GroupMembersList id={id ?? ''} allowAdding={false} allowDelete={false}/>
                            </Tab.Pane>
                        </Tab.Content>

                    </Tab.Container>
                </Col>
                <Col
                    className='d-none d-lg-block'
                    lg={4}
                >
                    <div className="group-side-info">
                        <h2>
                            {name}
                        </h2>
                        <div className="group-side-info__count-wrap">
                            <div className="group-side-info__count">
                                <div className="group-side-info__number">
                                    {allPosts?.data?.data?.totalCount ?? 'N/A'}
                                </div>
                                <div className="group-side-info__title">
                                    Discussions
                                </div>
                            </div>
                            <div className="group-side-info__count">
                                <div className="group-side-info__number">
                                    {members ?? 'N/A'}
                                </div>
                                <div className="group-side-info__title">
                                    Members
                                </div>
                            </div>
                        </div>
                        <button
                            className='create-post-btn'
                            onClick={showModal}
                        >
                            Create post
                        </button>
                        <GroupLeaveButton
                            isOwner={!!data.isOwner}
                            id={data.id}
                        />
                    </div>
                </Col>
                <GroupPostCreate
                    showModal={showCreatePost}
                    hideModal={hideModal}
                    categories={categories?.data?.data?.categories ?? []}
                    groupId={data.id ?? ''}
                />
            </Row>
        </Container>
    );
};

export default SingleGroupPage;