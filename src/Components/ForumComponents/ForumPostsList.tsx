import React from 'react';
import SinglePost from "./SinglePost.tsx";
import NoContent from '../../assets/no_groups.png';
import type {PostResponse} from "../../../API_backup";

interface ForumPostList {
    posts: PostResponse[];
}

const ForumPostsList:React.FC<ForumPostList> = ({posts}) => {

    if (posts?.length > 0)
    return (
        <ul className='forums-list'>
            {
                posts.map((post) =>
                    <SinglePost key={post.postId} data={post} isPostPage={false}/>
                )
            }
        </ul>
    );
    else return (
        <div className='empty-section'>
            <img src={NoContent} alt="empty section"/>
            <h3>
                There are currently no posts
            </h3>
            <p>
                Be the first to create a new posts!
            </p>
        </div>
    )
};

export default ForumPostsList;