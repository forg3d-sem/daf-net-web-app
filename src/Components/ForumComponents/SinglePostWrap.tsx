import React from 'react';

interface SinglePostWrap {
    children: React.ReactNode;
    isPostPage: boolean;
}

const SinglePostWrap:React.FC<SinglePostWrap> = (props) => {

    if (props.isPostPage) return (
        <div className='single-post'>
            {props.children}
        </div>

    );
    else return (
        <li className='single-post'>
            {props.children}
        </li>
    );
};

export default SinglePostWrap;