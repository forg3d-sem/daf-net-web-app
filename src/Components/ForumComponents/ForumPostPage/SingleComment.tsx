import React from 'react';
import ProfileIconComponent from "../../SettingsComponents/ProfileComponents/ProfileIconComponent.tsx";
import type {CommentResponse} from "../../../../APIs";
import '../../SettingsComponents/settingsStyles.scss';

interface SingleComment {
    data: CommentResponse
}

const SingleComment:React.FC<SingleComment> = (props) => {

    const {content, profile, createdAt} = props.data

    return (
        <li className='forum-comment'>
            <div className="comment-top">
                <div className="comment-author">
                    <ProfileIconComponent
                        name={profile?.firstName ?? ''}
                        lastName={profile?.lastName ?? ''}
                        url={''}
                        maxSize={40}
                    />
                    <div className="author-details">
                        <div className="author-name">{`${profile?.firstName} ${profile?.lastName}`}</div>
                        <div className="comment-time">{createdAt}</div>
                    </div>
                </div>
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