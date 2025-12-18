import React, {useCallback, useState} from 'react';
import {Col, Container, Row, Spinner} from "react-bootstrap";
import {type GroupCreateRequest, type GroupResponse, type GroupUpdateRequest} from '../../../APIs';
import Camera from '../../assets/camera.svg';
import './GroupsStyles.scss';
import '../SettingsComponents/ProfileComponents/profileStyles.scss';
import AddGroupImage from "./AddGroupImage.tsx";

interface EditGroup {
    data:GroupResponse | null;
    handleGroupData: (data:GroupCreateRequest | GroupUpdateRequest) => void;
    isPending: boolean
}

const EditGroup:React.FC<EditGroup> = ({data, handleGroupData, isPending}) => {

    const [name, setName] = useState(data ? data.name as string : '');
    const [description, setDescription] = useState(data ? data.description as string : '');
    const [imageUrl, setImageUrl] = useState(data ? data.imageUrl : null);

    const handleImageLink = useCallback((link:string | null) => {

        if (link === null) {
            setImageUrl(null);
            return
        }

        const newImageLink = `https://dafnet.tes.gd${link}`

        setImageUrl(newImageLink);
    }, [])


    return (
        <Container>
            <Row className='justify-content-center'>
                <Col
                    lg={8}
                    className='edit-group'
                >
                    <div className="edit-group__top">
                        <div className="edit-group__photo-group">
                            {
                                imageUrl
                                    ?
                                    <img
                                        className='edit-group__logo'
                                        src={imageUrl}
                                        alt={`${name}`}
                                    />
                                    :
                                    <div className='edit-group__logo-placeholder'>
                                        <img src={Camera} alt="Group icon placeholder"/>
                                    </div>
                            }
                            <AddGroupImage
                                handleImageLink={handleImageLink}
                            />
                        </div>
                        <button
                            className='edit-group__save-btn'
                            onClick={() => handleGroupData({name: name, description: description, imageUrl: imageUrl})}
                            disabled={isPending}
                        >
                            {
                                isPending
                                ?
                                <Spinner animation='border'/>
                                    :
                                    "Save"
                            }
                        </button>

                    </div>
                    <div className="edit-profile-double">
                        <div className="input-group">
                            <label htmlFor="name">Name</label>
                            <input
                                id='name'
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="description">Description</label>
                            <input
                                id='description'
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default EditGroup;