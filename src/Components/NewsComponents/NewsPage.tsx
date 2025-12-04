import React from 'react';
import type {PostResponse} from "../../../API_backup";
import {Col, Container, Row} from "react-bootstrap";
import BackArrow from "../../assets/back-arrow.svg";
import '../ForumComponents/forumStyles.scss'
import '../ForumComponents/ForumPostPage/postStyles.scss';
import SettingsLoader from "../SettingsComponents/SettingsLoader.tsx";
import Clock from "../../assets/clock_icon.svg";

interface NewsPage {
    data: PostResponse;
    isLoading: boolean;
    error: string;
}

const NewsPage:React.FC<NewsPage> = (props) => {

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
            <Row>
                <Col className='news-post-content'>
                    {
                        (props.data && !props.isLoading) &&
                        <>
                            <h1>
                                {props.data.title}
                            </h1>
                            <div className="created-at">
                                <img src={Clock} alt=""/>
                                <span>{new Date(props.data.createdAt ?? Date.now()).toLocaleDateString(undefined, {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}</span>
                            </div>
                            <p>
                                {props.data.content}
                            </p>
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

export default NewsPage;