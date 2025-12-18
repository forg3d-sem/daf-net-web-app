import React from 'react';
import {Col, Container, Nav, Row, Spinner, Tab} from "react-bootstrap";
import {type GroupResponse} from '../../../APIs';
import BackArrow from "../../assets/back-arrow.svg";
import './GroupsStyles.scss';
import GroupIcon from "../../assets/settings_group.svg";
import ForumPostsList from "../ForumComponents/ForumPostsList.tsx";
import '../ForumComponents/forumStyles.scss'
import '../UserProfile/userProfileStyles.scss';
import useFetchAllPosts from "../../Hooks/Posts/useFetchAllPosts.ts";
import GroupMembersList from "./GroupMembersList.tsx";
import useLeaveGroup from "../../Hooks/Group/useLeaveGroup.ts";
import {useAppDispatch} from "../../store/storeHooks.ts";
import {notificationActions} from "../../store/slices/NotificationSlice.ts";
import {useNavigate} from "@tanstack/react-router";

interface SingleGroupPage {
    data: GroupResponse
}

const SingleGroupPage: React.FC<SingleGroupPage> = ({data}) => {

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const {name, description, imageUrl, members, id} = data;

    const {data: allPosts, isLoading: loadingPosts, error: postsError} = useFetchAllPosts(id);

    const {mutate, isPending} = useLeaveGroup();

    const handleLeaveGroup = () => {
        mutate(id ?? '', {
            onSuccess: () => {
                dispatch(notificationActions.setNotification({type: 'success', text: 'Group left'}));
                navigate({to: '/groups', replace: true})
            },
            onError: () => {
                dispatch(notificationActions.setNotification({type: 'error', text: 'Failed to leave the group'}));
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
                            Test
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
                            onClick={handleLeaveGroup}
                        >
                            {
                                isPending
                                    ?
                                    <Spinner animation='border'/>
                                    :
                                    "Leave the group"
                            }
                        </button>
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
                                {
                                    loadingPosts
                                    &&
                                    <div className='w-100 d-flex justify-content-center'>
                                        <Spinner
                                            animation='border'
                                        />
                                    </div>
                                }
                                {
                                    (allPosts && !loadingPosts) &&
                                    <ForumPostsList
                                        posts={allPosts?.data?.data?.posts ?? []}
                                    />
                                }
                                {
                                    (postsError && !loadingPosts) &&
                                    <div className='w-100 text-center'>
                                        {postsError.message}
                                    </div>
                                }

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
                            Test
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
                            onClick={handleLeaveGroup}
                        >
                            {
                                isPending
                                    ?
                                    <Spinner animation='border'/>
                                    :
                                    "Leave the group"
                            }
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SingleGroupPage;