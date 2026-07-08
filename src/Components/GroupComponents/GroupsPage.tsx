import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {type GroupResponse} from '../../../APIs';
import {Link} from "@tanstack/react-router";
import GroupListItem from "./GroupListItem.tsx";
import NoGroups from "./NoGroups.tsx";
import '../ForumComponents/forumStyles.scss';
import './GroupsStyles.scss';

interface GroupsPage {
    data: GroupResponse[]
}

const GroupsPage:React.FC<GroupsPage> = ({data}) => {
    return (
        <Container>
            <Row className='justify-content-center'>
                <Col lg={8}>
                    {
                        data.length > 0
                        ?
                            <>
                                <div className="groups-top">
                                    <div className="groups-top__text">
                                        <h1>
                                            Groups
                                        </h1>
                                        <p>
                                            Feel free to create groups to discuss and collaborate on specific topics
                                        </p>
                                    </div>
                                    <Link
                                        to='/groups/create'
                                        className='groups-top__create-btn'
                                    >
                                        Create
                                    </Link>
                                </div>
                                <ul className='group-list'>
                                    {
                                        data.map((group) =>
                                            <GroupListItem
                                                key={group.id}
                                                groupData={group}
                                            />
                                        )
                                    }
                                </ul>
                            </>
                            :
                            <NoGroups/>
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default GroupsPage;