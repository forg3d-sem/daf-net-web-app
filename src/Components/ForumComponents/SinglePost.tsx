import React from 'react';
import ProfileIconComponent from "../SettingsComponents/ProfileComponents/ProfileIconComponent.tsx";
import type {PostResponse} from "../../../APIs";
import SinglePostWrap from "./SinglePostWrap.tsx";

interface SinglePost {
    data: PostResponse;
    isPostPage: boolean;
}

const SinglePost: React.FC<SinglePost> = (props) => {

    const data = props.data

    return (
        <SinglePostWrap
            linkId={data?.postId ?? ''}
            isPostPage={props.isPostPage}
        >
            <div className="post-heading">
                <h5>{data.title}</h5>
                {/*place for button*/}
            </div>
            {/*<ul className="post-cats">*/}
            {/*    <li className='post-single-cat'></li>*/}
            {/*</ul>*/}
            {
                props.isPostPage &&
                <div className="post-content">
                    {
                        data.content
                    }
                </div>
            }
            <div className="post-footer">
                <div className="post-author">
                    <ProfileIconComponent
                        name={data?.profile?.firstName ?? ''}
                        lastName={data?.profile?.lastName ?? ''}
                        url={''}
                        maxSize={40}
                    />
                    <div className="author-name">
                        {`${data?.profile?.firstName} ${data?.profile?.lastName}`}
                    </div>
                </div>
                <div className="post-stats"></div>
            </div>
        </SinglePostWrap>
    );
};

export default SinglePost;