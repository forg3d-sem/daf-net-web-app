import React from 'react';
import useFetchPostsByUser from "../../../Hooks/Posts/useFetchPostsByUser.ts";
import ForumPostsList from "../../ForumComponents/ForumPostsList.tsx";
import '../../ForumComponents/forumStyles.scss';

interface ProfileForumsProps {
    id: string | undefined;
}

const ProfileForums:React.FC<ProfileForumsProps> = ({id}) => {

    const {isLoading, data, error} = useFetchPostsByUser(1, id ?? '');

    if (isLoading) return (
        <div className='profile-forums-empty'>
            <h4>Loading forums...</h4>
        </div>
    );

    if (error) return (
        <div className='profile-forums-empty'>
            <h4>Error loading forums</h4>
            <p>{error.message}</p>
        </div>
    );

    if (data?.data?.data?.posts?.length === 0) return (
        <div className='profile-forums-empty'>
            <h4>No forums yet!</h4>
            <p>
                Create a new forum to show here
            </p>
        </div>
    );

   return(
           <ForumPostsList posts={data?.data?.data?.posts ?? []}/>
   )
};

export default ProfileForums;