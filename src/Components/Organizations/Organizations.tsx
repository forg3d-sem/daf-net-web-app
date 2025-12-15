import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {type OrganizationResponse} from '../../../APIs';
import './OrganizationsStyles.scss';
import NoContent from "../../assets/no_groups.png";
import '../ForumComponents/forumStyles.scss';

interface Organizations {
    data: OrganizationResponse[];
}

const Organizations: React.FC<Organizations> = ({data}) => {
    return (
        <Container>
            <Row className='justify-content-center'>
                <Col lg={8} className='organizations-page'>
                    {
                        data.length > 0 &&
                        <>
                            <h1 className='organizations-page__title'>
                                Our partner organizations
                            </h1>
                            <p className='organizations-page__text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua.
                            </p>
                            {
                                data.length &&
                                <ul className='organizations-page__list'>
                                    {
                                        data.map(org =>
                                            <li key={org.id}>
                                                <img src={org.imageUrl ?? ''} alt={org.name ?? ''}/>
                                                <h6>
                                                    {org.name}
                                                </h6>
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
                                Contact us and be the first organization to be displayed here
                            </p>
                        </div>
                    }
                </Col>
            </Row>
        </Container>
    )
        ;
};

export default Organizations;