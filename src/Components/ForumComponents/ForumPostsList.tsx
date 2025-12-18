import React from 'react';
import SinglePost from "./SinglePost.tsx";
import NoContent from '../../assets/no_groups.png';
import type {PostResponse} from "../../../APIs";

interface ForumPostList {
    posts: PostResponse[];
    isUserPage?: boolean
}

const ForumPostsList: React.FC<ForumPostList> = ({posts, isUserPage}) => {

    if (posts?.length > 0)
        return (
            <ul className='forums-list'>
                {
                    posts.map((post) =>
                        <SinglePost key={post.postId} data={post} isPostPage={false} />
                    )
                }
            </ul>
        );
    else return (
        <div className='empty-section'>
            <img src={NoContent} alt="empty section"/>
            <h3>
                {
                    isUserPage ?
                        "No posts yet"
                        :
                        "There are currently no posts"
                }

            </h3>
            <p>
                {
                    isUserPage ?
                        "This user don't have post "
                        :
                        "Be the first to create a new posts!"
                }

            </p>
        </div>
    )
};

export default ForumPostsList;