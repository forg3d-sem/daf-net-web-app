import React from 'react';
import {Link} from "@tanstack/react-router";

interface SinglePostLinkWrapper {
    isPostPage: boolean;
    linkId: string;
    children:React.ReactNode
}

const SinglePostLinkWrapper:React.FC<SinglePostLinkWrapper> = (props) => {
    const {isPostPage, linkId, children} = props

    if (isPostPage) return(
        <>
            {children}
        </>
    );
    else return(
        <Link  to={'/post/$postId'} params={{postId: linkId}} className='single-post-link-wrap'>
            {children}
        </Link>
    );
};

export default SinglePostLinkWrapper;