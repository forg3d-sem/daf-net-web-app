import React from 'react';
import ProfileIconComponent from "./ProfileIconComponent.tsx";
import {Link} from "@tanstack/react-router";
import './profileStyles.scss';
import ProfileForums from "./ProfileForums.tsx";
import type {ProfileResponse} from "../../../../APIs";

interface Profile {
    profileObj:ProfileResponse
}

const Profile: React.FC<Profile> = (props) => {

    const {firstName, lastName, username, about} = props.profileObj;

    const discussionsCount = 0;
    const connectionsCount = 0;

    return (
        <>
            <div className='profile-section top-section'>
                <div className="profile-general">
                    <ProfileIconComponent
                        url={''}
                        name={firstName as string}
                        lastName={lastName as string}
                        maxSize={90}
                    />
                    <div className="general-text-group">
                        <div className="name-line">
                            {`${firstName} ${lastName}`}
                        </div>
                        {/*<div className="mail-line">*/}
                        {/*    {email}*/}
                        {/*</div>*/}
                        <div className="login-line">
                            {username}
                        </div>
                    </div>
                </div>
                <Link
                    to={'/settings/profile-edit'}
                    className='profile-edit-btn'
                >
                    Edit
                </Link>
            </div>

            <div className="profile-section content-bordered stats-section">
                <div className="counter">
                    {discussionsCount}
                    <span className='counter__title'>Discussions</span>
                </div>
                <div className="divider"></div>
                <div className="counter">
                    {connectionsCount}
                    <span className='counter__title'>Connections</span>
                </div>
            </div>

            <div className="profile-section">
                <h3>
                    About yourself:
                </h3>
                <div className='content-bordered'>

                    {
                        about?.length === 0
                        ?
                        <div className='empty-bio'>
                            This section is currently empty.
                        </div>
                        :
                        about
                    }
                </div>
            </div>
            <div className="profile-section">
                <div className="forums-top">
                    <h3>Forums</h3>
                    <Link to={'/'}>View more</Link>
                </div>
                <div className="content-bordered">
                    <ProfileForums/>
                </div>
            </div>
        </>
    );
};

export default Profile;