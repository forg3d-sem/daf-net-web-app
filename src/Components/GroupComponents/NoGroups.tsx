import React from 'react';
import NoContent from "../../assets/no_groups.png";
import {Link} from "@tanstack/react-router";

const NoGroups:React.FC = () => {
    return (
        <div className='empty-section'>
            <img src={NoContent} alt="empty section"/>
            <h3>
                No groups found
            </h3>
            <p>
                It looks like you’re not part of any groups yet. Create a group to start connecting with others.
            </p>
            <Link
                to='/groups/create'
                className='empty-section__create-group-btn'
            >
                Create a group
            </Link>
        </div>
    );
};

export default NoGroups;