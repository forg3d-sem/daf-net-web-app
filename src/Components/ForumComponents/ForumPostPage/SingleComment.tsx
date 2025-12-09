import React from 'react';
import ProfileIconComponent from "../../SettingsComponents/ProfileComponents/ProfileIconComponent.tsx";
import type {CommentResponse} from "../../../../APIs";
import '../../SettingsComponents/settingsStyles.scss';
import {Link} from "@tanstack/react-router";

interface SingleComment {
    data: CommentResponse
}

const SingleComment:React.FC<SingleComment> = (props) => {

    const {content, profile, createdAt} = props.data;
    const date = new Date(createdAt ?? '');
    const formattedDate = date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    return (
        <li className='forum-comment'>
            <div className="comment-top">
                <Link to='/user/$userId' params={{userId: profile?.userId ?? ''}} className="comment-author">
                    <ProfileIconComponent
                        name={profile?.firstName ?? ''}
                        lastName={profile?.lastName ?? ''}
                        url={profile?.imageUrl ?? ''}
                        maxSize={40}
                    />
                    <div className="author-details">
                        <div className="author-name">{`${profile?.firstName} ${profile?.lastName}`}</div>
                        <div className="comment-time">{formattedDate}</div>
                    </div>
                </Link>
                {/*likes will be here*/}
            </div>
            <div className="comment-text">
                {content}
            </div>
            {/*answer will be here*/}
            {/*<div className="comment-bottom"></div>*/}
        </li>
    );
};

export default SingleComment;