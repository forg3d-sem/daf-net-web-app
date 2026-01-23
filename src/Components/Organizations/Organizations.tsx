import React, {useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {type OrganizationResponse} from '../../../APIs';
import './OrganizationsStyles.scss';
import NoContent from "../../assets/no_groups.png";
import '../ForumComponents/forumStyles.scss';
import {Link} from "@tanstack/react-router";
import CreateOrganization from "./CreateOrganization.tsx";
import Cam from '../../assets/camera.svg';

interface Organizations {
    data: OrganizationResponse[];
}

const Organizations: React.FC<Organizations> = ({data}) => {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(p => !p)
    }

    return (
        <Container>
            <Row className='justify-content-center'>
                <Col lg={8} className='organizations-page'>
                    {
                        data.length > 0 &&
                        <>
                            <div className="organizations-page__top">
                                <div className="organizations-page__top-text">
                                    <h1 className='organizations-page__title'>
                                        Our partner organizations
                                    </h1>
                                    {/*<p className='organizations-page__text'>*/}
                                    {/*    Get to know our network by exploring the pioneering organisations that make up*/}
                                    {/*    the DAF*/}
                                    {/*    network, and feel free to enter your own organisation.*/}
                                    {/*</p>*/}
                                    <p className='organizations-page__text'>
                                        Below is a list of all active organizations in the DAF Network
                                    </p>
                                </div>
                                <button onClick={toggleModal}>Submit</button>
                            </div>
                            {
                                data.length &&
                                <ul className='organizations-page__list'>
                                    {
                                        data.map(org =>
                                            <li key={org.id}>
                                                {
                                                    (org.imageUrl && org.imageUrl !== '')
                                                    ?
                                                        <img src={org.imageUrl ?? ''} alt={org.name ?? ''}/>
                                                        :
                                                        <div className='image-empty-list'>
                                                            <img src={Cam} alt=""/>
                                                        </div>
                                                }
                                                <Link to='/organizations/$organizationId'
                                                      params={{organizationId: org.id ?? ''}}>
                                                    {org.name}
                                                </Link>
                                            </li>
                                        )
                                    }
                                </ul>
                            }
                        </>
                    }
                    {
                        data.length === 0 &&
                        <div className='empty-section'>
                            <img src={NoContent} alt="empty section"/>
                            <h3>
                                There's no organizations in this list right now
                            </h3>
                            <p>
                                Submit your organization to be displayed here!
                            </p>
                        </div>
                    }
                    <CreateOrganization
                        showModal={showModal}
                        handleHideModal={toggleModal}
                    />
                </Col>
            </Row>
        </Container>
    )
        ;
};

export default Organizations;