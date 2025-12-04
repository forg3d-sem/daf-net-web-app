import React from 'react';
import {nanoid} from "nanoid/non-secure";

const ProfileForums:React.FC = () => {

    const forums:string[] = [];

    if (forums?.length > 0) return (
        <ul>
            {
                forums.map((item) =>
                    <li key={nanoid()}>{item}</li>
                )
            }
        </ul>
    )
    else return(
        <div className='profile-forums-empty'>
            <h4>No forums yet!</h4>
            <p>
                Create a new forum to show here
            </p>
        </div>
    );
};

export default ProfileForums;