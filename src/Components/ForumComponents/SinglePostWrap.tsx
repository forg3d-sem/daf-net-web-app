import React from 'react';
import {Link} from "@tanstack/react-router";

interface SinglePostWrap {
    children: React.ReactNode;
    isPostPage: boolean;
    linkId: string;
}

const SinglePostWrap:React.FC<SinglePostWrap> = (props) => {

    if (!props.isPostPage) return (
        <li>
            <Link to={'/post/$postId'} params={{postId: props.linkId}} className='single-post single-post-link'>
                {props.children}
            </Link>
        </li>
    );
    else return (
            <div className='single-post'>
                {props.children}
            </div>
    );
};

export default SinglePostWrap;