import React from 'react';
import type {PostResponse} from "../../../APIs";
import {Col, Container, Row} from "react-bootstrap";
import BackArrow from "../../assets/back-arrow.svg";
import '../ForumComponents/forumStyles.scss'
import '../ForumComponents/ForumPostPage/postStyles.scss';
import SettingsLoader from "../SettingsComponents/SettingsLoader.tsx";
import Clock from "../../assets/clock_icon.svg";
import DOMPurify from "dompurify";

interface NewsPage {
    data: PostResponse;
    isLoading: boolean;
    error: string;
}

const NewsPage:React.FC<NewsPage> = (props) => {

    const handleNavBack = (e:React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        history.back()
    };

    return (
        <Container>
            <Row className='justify-content-center'>
                <Col lg={8}>
                    <a className='post-back-btn' onClick={handleNavBack}>
                        <img src={BackArrow} alt="Back"/>
                        <span>Back</span>
                    </a>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col className='news-post-content' lg={8}>
                    {
                        (props.data && !props.isLoading) &&
                        <>
                            {
                                props.data.imageUrl &&
                                <img
                                    className='post-image'
                                    src={props.data.imageUrl ? `https://dafnet.tes.gd${props.data.imageUrl}` : ''}
                                    alt=""
                                />
                            }
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
                            <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.data.content ?? '')}}/>
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