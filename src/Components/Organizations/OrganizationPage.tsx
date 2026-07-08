import React from 'react';
import {type OrganizationResponse} from '../../../APIs';
import {Col, Container, Row} from "react-bootstrap";
import DOMPurify from "dompurify";
import SettingsLoader from "../SettingsComponents/SettingsLoader.tsx";
import './OrganizationsStyles.scss';
import Cam from "../../assets/camera.svg";

interface OrganizationPage {
    data: OrganizationResponse;
    isLoading: boolean;
    error: string;
}

const OrganizationPage:React.FC<OrganizationPage> = ({data, error, isLoading}) => {

    return (
        <Container>
            <Row className='justify-content-center'>
                <Col lg={8} className='organization-content'>
                    {
                        (data && !isLoading) &&
                        <>
                            <div className="organization-content__top">
                                {
                                    (data.imageUrl && data.imageUrl !== '')
                                    ?
                                        <img src={data.imageUrl ?? ''} alt=""/>
                                        :
                                        <div className='image-empty'>
                                            <img src={Cam} alt=""/>
                                        </div>
                                }
                                <h1>
                                    {data.name ?? ''}
                                </h1>
                            </div>
                            {
                                data.url &&
                                <>
                                    <h2>SiteLink</h2>
                                    <a href={data.url}>
                                        {data.url}
                                    </a>
                                </>
                            }
                            <h2>Description</h2>
                            <div className="organization-content__description" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.description ?? '')}}/>
                        </>
                    }
                    {
                        isLoading &&
                        <SettingsLoader/>
                    }
                    {
                        (error && !isLoading) &&
                        <div className='post-error-message'>{error}</div>
                    }

                </Col>
            </Row>
        </Container>
    );
};

export default OrganizationPage;