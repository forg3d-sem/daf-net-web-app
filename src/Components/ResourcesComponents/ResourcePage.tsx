import React from 'react';
import {Col, Container, Row, Spinner} from "react-bootstrap";
import BackArrow from "../../assets/back-arrow.svg";
import Clock from "../../assets/clock_icon.svg";
import SettingsLoader from "../SettingsComponents/SettingsLoader.tsx";
import '../ForumComponents/forumStyles.scss'
import '../ForumComponents/ForumPostPage/postStyles.scss';
import type {PostResponse} from "../../../APIs";
import DOMPurify from "dompurify";
import useFetchAttachment from "../../Hooks/Attachments/useFetchAttachment.ts";

interface ResourcePage {
    data: PostResponse;
    isLoading: boolean;
    error: string;
}

const ResourcePage:React.FC<ResourcePage> = (props) => {

    const attachmentId = props?.data?.attachmentId ?? '';

    const {data:attachmentData, isLoading, error} = useFetchAttachment(attachmentId);

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
                            <h5>Resource attachment:</h5>
                            {
                                isLoading &&
                                <Spinner animation='border'/>
                            }
                            {
                                attachmentData &&
                                <a href={attachmentData?.data?.data?.url ? `https://dafnet.tes.gd${attachmentData?.data?.data?.url}` : '#'}>{attachmentData?.data?.data?.fileName}</a>
                            }
                            {
                                error &&
                                <p>{error.message}</p>
                            }
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

export default ResourcePage;