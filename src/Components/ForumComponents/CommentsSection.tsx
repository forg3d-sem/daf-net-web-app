import ProfileIconComponent from "../SettingsComponents/ProfileComponents/ProfileIconComponent.tsx";
import React, {useMemo, useState} from "react";
import SingleComment from "./ForumPostPage/SingleComment.tsx";
// import useFetchComments from "../../Hooks/Cooments/useFetchComments.ts";
import useFetchProfile from "../../Hooks/Profile/useFetchProfile.ts";
// import SettingsLoader from "../SettingsComponents/SettingsLoader.tsx";

// interface CommentsSection {
//     id: string;
// }

const CommentsSection:React.FC = () => {

    const [comment, setComment] = useState('');

    // const {data: commentsData, isFetching: isFethingComments, error: commentsError} = useFetchComments(props.id);
    const id = useMemo(() => localStorage.getItem('id') ?? '', []);
    const {data} = useFetchProfile(id);

    const mockComments = [
        {
            commentId: "cmt-001",
            content: "Great update! We had similar soil conditions this week. Compost made a big difference for us too.",
            createdAt: "2025-12-03T11:12:45.000Z",
            profile: {
                userId: "user-201",
                imageUrl: "https://example.com/images/farmer_lucas.jpg",
                firstName: "Lucas",
                lastName: "Brown"
            }
        },
        {
            commentId: "cmt-002",
            content: "Be careful with early leaf blight—last year it spread fast on our corn fields.",
            createdAt: "2025-12-03T11:25:10.000Z",
            profile: {
                userId: "user-202",
                imageUrl: "https://example.com/images/farmer_emma.jpg",
                firstName: "Emma",
                lastName: "Kovalenko"
            }
        },
        {
            commentId: "cmt-003",
            content: "Nice work with the drip irrigation setup. What water pressure regulator are you using?",
            createdAt: "2025-12-03T12:05:18.000Z",
            profile: {
                userId: "user-203",
                imageUrl: "https://example.com/images/farmer_oleksiy.jpg",
                firstName: "Oleksiy",
                lastName: "Hrytsenko"
            }
        },
        {
            commentId: "cmt-004",
            content: "Our hives are also looking good this season. Hoping for a strong honey harvest next year!",
            createdAt: "2025-12-03T12:44:39.000Z",
            profile: {
                userId: "user-204",
                imageUrl: "https://example.com/images/beekeeper_maria.jpg",
                firstName: "Maria",
                lastName: "Dmytruk"
            }
        }
    ]

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
                    <button>
                        {}
                        Comment
                    </button>
                </div>
            </div>
            {
                (mockComments) &&
                <ul className='comments-list'>
                    {mockComments.map(comment =>
                        <SingleComment
                            key={comment.commentId}
                            data={comment}
                        />
                    )}
                </ul>
            }
                {/*{*/}
                {/*    (commentsData?.data?.data?.comments && commentsData?.data?.data?.comments.length > 0) &&*/}
                {/*    <ul>*/}
                {/*        {commentsData?.data?.data?.comments.map(comment =>*/}
                {/*            <SingleComment*/}
                {/*                key={comment.commentId}*/}
                {/*                data={comment}*/}
                {/*            />*/}
                {/*        )}*/}
                {/*    </ul>*/}
                {/*}*/}
                {/*{*/}
                {/*    isFethingComments &&*/}
                {/*    <SettingsLoader/>*/}
                {/*}*/}
                {/*{*/}
                {/*    (commentsError && !isFethingComments) &&*/}
                {/*    <div className='post-error-message'>*/}
                {/*        Failed to fetch comments.*/}
                {/*        /!*{commentsError.message}*!/*/}
                {/*    </div>*/}
                {/*}*/}
        </>
    );
};

export default CommentsSection;