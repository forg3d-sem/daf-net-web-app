import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import GroupIcon from "../../assets/settings_group.svg";
import GroupMembersList from "./GroupMembersList.tsx";
import type {GroupResponse} from "../../../APIs";
import {Link, useNavigate} from "@tanstack/react-router";
import './GroupsStyles.scss';
import AddMembersModal from "./AddMembersModal.tsx";
import '../SettingsComponents/ProfileComponents/profileStyles.scss';
import GroupPostCreate from "./GroupPostCreate.tsx";
import useFetchCategories from "../../Hooks/Categories/useFetchCategories.ts";


interface MyGroupPage {
    data: GroupResponse
}

const MyGroupPage: React.FC<MyGroupPage> = ({data}) => {

    const {name, description, imageUrl, members, id} = data;

    const [showModal, setShowModal] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);

    const navigate = useNavigate();

    //error and loading state are ignored, keep in mind that they need to be handled
    const {data: categories} = useFetchCategories(id ?? '', '', 1);

    const toggleModal = () => {
        setShowModal(p => !p);
    }

    const toggleCreateModal = () => {
        setShowCreateModal(p => !p);
    }

    useEffect(() => {
        if (!data) {
            return
        }
        if (!data.isOwner) {
            navigate({to:'/groups/$groupId', params: {groupId: id ?? ''}, replace: true})
        }
    }, [ navigate, id, data])

    return (
        <Container>
            <Row className='justify-content-center'>
                <Col
                    lg={8}
                    className='group-content group-content--my'
                >

                    <div className="group-content__wrapper">
                        <div className="group-content__info">
                            {
                                imageUrl
                                    ?
                                    <img
                                        className='group-content__logo'
                                        src={imageUrl}
                                        alt={`${name}`}
                                    />
                                    :
                                    <div className='group-content__logo-placeholder'>
                                        <img src={GroupIcon} alt="Group icon placeholder"/>
                                    </div>
                            }
                            <div className="group-content__text-data">
                                <h2>
                                    {name}
                                </h2>
                                <span>
                                {description}
                            </span>
                            </div>
                        </div>
                        <div className="group-content__buttons">
                            <button onClick={toggleModal}>Add member</button>
                            <Link to='/groups/edit/$groupId' params={{groupId: id ?? ''}}>Edit</Link>
                        </div>
                    </div>
                    <div className="group-content__stats content-bordered stats-section">
                        <div className="counter">
                            {members}
                            <span className='counter__title'>Members</span>
                        </div>
                        <div className="divider"></div>
                        <div className="counter">
                            N/A
                            <span className='counter__title'>Posts</span>
                        </div>
                    </div>
                    <GroupMembersList id={id ?? ''} allowAdding={true} allowDelete={true} toggleModal={toggleModal}/>
                    <AddMembersModal
                        groupId={id ?? ''}
                        show={showModal}
                        toggleModal={toggleModal}
                    />
                    <GroupPostCreate
                        showModal={showCreateModal}
                        toggleModal={toggleCreateModal}
                        categories={categories?.data?.data?.categories ?? []}
                        groupId={id ?? ''}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default MyGroupPage;