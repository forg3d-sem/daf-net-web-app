import {Col, Container, Row} from "react-bootstrap";
import {Link} from "@tanstack/react-router";
import SinglePost from "./SinglePost.tsx";
import CommentsSection from "./CommentsSection.tsx";
import React from "react";
import useGetPost from "../../Hooks/Posts/useGetPost.ts";
import type {PostResponse} from "../../../API_backup";
import SettingsLoader from "../SettingsComponents/SettingsLoader.tsx";
import './ForumPostPage/postStyles.scss';
import './forumStyles.scss';
import BackArrow  from '../../assets/back-arrow.svg';

interface PostPage {
    id: string;
}

const PostPage: React.FC<PostPage> = (props) => {

    const { isFetching, error} = useGetPost(props.id);

    const data = {data: {data: {
                postId: "post-001",
                profile: {
                    userId: "user-101",
                    imageUrl: "https://example.com/images/farmer_john.jpg",
                    username: "greenFields",
                    firstName: "John",
                    lastName: "Miller"
                },
                title: "Soil Preparation for Spring Wheat",
                content:
                    "Spent the morning plowing the east field and adding organic compost. Soil moisture looks perfect after last week's rainfall.",
                createdAt: "2025-12-03T10:22:11.000Z"
            }}}

    return (
        <Container>
            <Row>
                <Col>
                    <Link className='post-back-btn' to={'/'}>
                        <img src={BackArrow} alt="Back"/>
                        <span>Back</span>
                    </Link>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col lg={8}>
                    {
                        (data?.data?.data && error) &&
                    <>
                        <SinglePost
                            data={data?.data?.data as PostResponse}
                            isPostPage={true}
                        />
                        <CommentsSection
                            // id={props.id}
                        />
                    </>
                    }
                    {
                        isFetching &&
                        <SettingsLoader/>
                    }
                    {/*{*/}
                    {/*    (error && !isFetching) &&*/}
                    {/*    <div className='post-error-message'>{error.message ?? ''}</div>*/}
                    {/*}*/}
                </Col>
            </Row>
        </Container>
    );
};

export default PostPage;