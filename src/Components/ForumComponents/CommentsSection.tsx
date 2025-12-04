import ProfileIconComponent from "../SettingsComponents/ProfileComponents/ProfileIconComponent.tsx";
import React, {useMemo, useState} from "react";
import SingleComment from "./ForumPostPage/SingleComment.tsx";
import useFetchComments from "../../Hooks/Comments/useFetchComments.ts";
import useFetchProfile from "../../Hooks/Profile/useFetchProfile.ts";
import SettingsLoader from "../SettingsComponents/SettingsLoader.tsx";
import usePostComment from "../../Hooks/Comments/usePostComment.ts";
import {Spinner} from "react-bootstrap";

interface CommentsSection {
    id: string;
}

const CommentsSection:React.FC<CommentsSection> = (props) => {

    const [comment, setComment] = useState('');

    const {data: commentsData, isFetching: isFethingComments, error: commentsError, refetch} = useFetchComments(props.id);
    const id = useMemo(() => localStorage.getItem('id') ?? '', []);
    const {data} = useFetchProfile(id);
    const {mutate, isPending} = usePostComment()

    const postComment = () => {
        mutate({postId: props.id, content: comment}, {
            onSuccess: () => {
                refetch()
                setComment('');
            }
        })
    }

    return (
        <>
            <h6 className='comments-section-title'>Comments</h6>
            <div className="write-comment">
                <div className="write-top">
                    <ProfileIconComponent
                        name={data?.data?.data?.firstName ?? ''}
                        lastName={data?.data?.data?.lastName ?? ''}
                        url={''}
                        maxSize={40}
                    />
                    <span className='write-author-name'>{`${data?.data?.data?.firstName} ${data?.data?.data?.lastName}`}</span>
                </div>
                <input type="text" placeholder='Write something' value={comment} onChange={e => setComment(e.target.value)}/>
                <div className="write-bottom">
                    <button
                        onClick={postComment}
                        disabled={isPending}
                    >
                        {
                            isPending
                            ?
                                <Spinner animation='border'/>
                                :
                                "Comment"
                        }
                    </button>
                </div>
            </div>
                {
                    (commentsData?.data?.data?.comments && !isFethingComments) &&
                    <ul className='comments-list'>
                        {
                            commentsData?.data?.data?.comments.sort((a, b) => new Date(b.createdAt as string).getTime() - new Date(a.createdAt as string).getTime()).map(comment =>
                            <SingleComment
                                key={comment.commentId}
                                data={comment}
                            />
                        )}
                    </ul>
                }
                {
                    isFethingComments &&
                    <SettingsLoader/>
                }
                {
                    (commentsError && !isFethingComments) &&
                    <div className='post-error-message'>
                        {commentsError.message}
                    </div>
                }
        </>
    );
};

export default CommentsSection;