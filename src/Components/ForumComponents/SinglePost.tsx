import React, {useMemo} from 'react';
import ProfileIconComponent from "../SettingsComponents/ProfileComponents/ProfileIconComponent.tsx";
import type {PostResponse} from "../../../APIs";
import SinglePostWrap from "./SinglePostWrap.tsx";
import LikeBtn from '../../assets/post-like-btn.svg';
import {getDateString} from "../../functions/functions.ts";
import useToggleLike from "../../Hooks/useToggleLike.ts";
import {useQueryClient} from "@tanstack/react-query";
import {useAppDispatch} from "../../store/storeHooks.ts";
import {notificationActions} from "../../store/slices/NotificationSlice.ts";
import DOMPurify from "dompurify";
import Survey from "./ForumPostPage/Survey.tsx";
import {Link} from "@tanstack/react-router";
import SinglePostLinkWrapper from "./ForumPostPage/SinglePostLinkWrapper.tsx";

interface SinglePost {
    data: PostResponse;
    isPostPage: boolean;
    refetch: () => void;
}

const SinglePost: React.FC<SinglePost> = (props) => {

    const dispatch = useAppDispatch();

    const data = props.data;

    const sanitazedContent = useMemo(() => DOMPurify.sanitize(props.data.content ?? ''), [props.data.content])

    const {mutate, isPending} = useToggleLike();

    const queryClient = useQueryClient();

    const toggleLike = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();
        mutate(data.postId ?? '', {
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey: ['allPosts']});
                queryClient.invalidateQueries({queryKey: ['post', data.postId]});
                props.refetch();
            },
            onError: (error) => {
                dispatch(notificationActions.setNotification({text: error.message, type: 'error'}));
            }
        });
    }

    return (
        <SinglePostWrap
            isPostPage={props.isPostPage}
        >
            <SinglePostLinkWrapper
                isPostPage={props.isPostPage}
                linkId={data?.postId ?? ''}
            >
                <div className="post-heading">
                    <h5>{data.title}</h5>
                    {/*place for button*/}
                    <button
                        className='post-like-btn'
                        disabled={isPending}
                        onClick={(e) => toggleLike(e)}
                    >
                        {data.isLiked
                            ?
                            <img src={LikeBtn} alt=""/>
                            :
                            <img src={LikeBtn} alt=""/>
                        }
                    </button>
                </div>
                <div className="category-list">
                    {data.surveyId &&
                        <div className="post-category survey-category">
                            survey
                        </div>
                    }
                    <div className="post-category">
                        {data.categoryName}
                    </div>
                </div>
            </SinglePostLinkWrapper>
            {/*<ul className="post-cats">*/}
            {/*    <li className='post-single-cat'></li>*/}
            {/*</ul>*/}
            {
                props.isPostPage &&
                <div className="post-content" dangerouslySetInnerHTML={{__html: sanitazedContent}}/>
            }
            {
                (props.isPostPage && data.surveyId) &&
                <Survey
                    id={data.surveyId}
                />
            }
            <div className="post-footer">
                <Link
                    to={'/user/$userId'} params={{userId: data?.profile?.userId ?? ''}}
                    className="post-author"
                >
                    <ProfileIconComponent
                        name={data?.profile?.firstName ?? ''}
                        lastName={data?.profile?.lastName ?? ''}
                        url={data?.profile?.imageUrl ?? ''}
                        maxSize={40}
                    />
                    <div className="post-author-data">
                        <div className="author-name">
                            {`${data?.profile?.firstName} ${data?.profile?.lastName}`}
                        </div>
                        <div className="post-time">
                            {getDateString(data.createdAt)}
                        </div>
                    </div>
                </Link>
                <div className="post-stats">
                    <div className="post-stats-count">
                        {data.likesCount} likes
                    </div>
                    <div className="post-stats-count">
                        {data.commentsCount} comments
                    </div>
                </div>
            </div>
        </SinglePostWrap>
    );
};

export default SinglePost;