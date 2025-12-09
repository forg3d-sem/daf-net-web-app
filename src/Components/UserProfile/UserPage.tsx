import React from 'react';
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import type {ProfileResponse} from "../../../APIs";
import ProfileIconComponent from "../SettingsComponents/ProfileComponents/ProfileIconComponent.tsx";
import '../SettingsComponents/ProfileComponents/profileStyles.scss';
import './userProfileStyles.scss';
import '../ForumComponents/forumStyles.scss';
import '../ForumComponents/ForumPostPage/postStyles.scss'
import BackArrow from "../../assets/back-arrow.svg";
import SettingsLoader from "../SettingsComponents/SettingsLoader.tsx";
import ForumPostsList from "../ForumComponents/ForumPostsList.tsx";
import useFetchPostsByUser from "../../Hooks/Posts/useFetchPostsByUser.ts";

interface UserPage {
    userData: ProfileResponse | undefined;
    isLoadingProfile: boolean;
    profileError: string | undefined
}

const UserPage: React.FC<UserPage> = (props) => {

    const {userData, isLoadingProfile, profileError} = props

    const {isFetching: fetchingPosts, data: posts, error: postsError} = useFetchPostsByUser(1, userData?.userId ?? '');

    return (
        <Container>
            <Row className='justify-content-center'>
                <Col lg={8}>
                    <a className='post-back-btn' onClick={() => history.back()}>
                        <img src={BackArrow} alt="Back"/>
                        <span>Back</span>
                    </a>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col className='user-profile' lg={8}>
                    {
                        (!isLoadingProfile && userData) &&
                        <>
                            <div className='top-section'>
                                <div className="profile-general">
                                    <ProfileIconComponent
                                        url={userData.imageUrl}
                                        name={userData.firstName ?? ''}
                                        lastName={userData.lastName ?? ''}
                                        maxSize={90}
                                    />
                                    <div className="general-text-group">
                                        <div className="name-line">
                                            {`${userData.firstName} ${userData.lastName}`}
                                        </div>
                                        {/*<div className="mail-line">*/}
                                        {/*    {email}*/}
                                        {/*</div>*/}
                                        <div className="login-line">
                                            {userData.username}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Tab.Container
                                defaultActiveKey='about'
                            >
                                <Nav>
                                    <Nav.Item>
                                        <Nav.Link eventKey='about'>About</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey='posts'>Posts</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey='about'>
                                        <h2>
                                            About user:
                                        </h2>

                                            {
                                                userData?.about?.length
                                                ?
                                                    <p>
                                                    userData.about
                                                    </p>
                                                    :
                                                    <div className='bio-empty'>
                                                        User bio is empty
                                                    </div>

                                            }
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='posts'>
                                        {
                                            fetchingPosts &&
                                            <SettingsLoader/>
                                        }
                                        {
                                            (!fetchingPosts && posts) &&

                                            <ForumPostsList
                                                isUserPage={true}
                                                posts={posts?.data?.data?.posts ?? []}
                                                refetch={() => {
                                                }}
                                            />
                                        }
                                        {
                                            (!fetchingPosts && postsError) &&
                                            <div className='post-error-message'>{postsError.message}</div>
                                        }

                                    </Tab.Pane>
                                </Tab.Content>

                            </Tab.Container>
                        </>
                    }
                    {
                        isLoadingProfile &&
                        <SettingsLoader/>
                    }
                    {
                        (!isLoadingProfile && profileError) &&
                        <div className='post-error-message'>{props.profileError}</div>
                    }

                </Col>
            </Row>
        </Container>
    );
};

export default UserPage;