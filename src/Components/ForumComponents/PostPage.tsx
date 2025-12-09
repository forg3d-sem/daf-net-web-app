import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import SinglePost from "./SinglePost.tsx";
import CommentsSection from "./CommentsSection.tsx";
import type {PostResponse} from "../../../APIs";
import SettingsLoader from "../SettingsComponents/SettingsLoader.tsx";
import './ForumPostPage/postStyles.scss';
import './forumStyles.scss';
import BackArrow  from '../../assets/back-arrow.svg';

interface PostPage {
    data: PostResponse;
    isLoading: boolean;
    error: string;
    refetch: () => void;
}

const PostPage: React.FC<PostPage> = (props) => {

    return (
        <Container>
            <Row>
                <Col>
                    <a className='post-back-btn' onClick={() => history.back()}>
                        <img src={BackArrow} alt="Back"/>
                        <span>Back</span>
                    </a>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col lg={8}>
                    {
                        (props.data && !props.isLoading) &&
                    <>
                        <SinglePost
                            data={props.data}
                            isPostPage={true}
                            refetch={props.refetch}
                        />
                        <CommentsSection
                            id={props.data.postId ?? ''}
                            postCategory={props.data.categoryId ?? ''}
                        />
                    </>
                    }
                    {
                        props.isLoading &&
                        <SettingsLoader/>
                    }
                    {
                        (props.error && !props.isLoading) &&
                        <div className='post-error-message'>{props.error}</div>
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default PostPage;