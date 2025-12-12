import React, {useMemo} from 'react';
import {Link} from "@tanstack/react-router";
import type {CategoryResponse, PostResponse} from "../../../APIs";
import Clock from "../../assets/clock_icon.svg";
import DOMPurify from "dompurify";

interface SingleResource {
    data: PostResponse;
    categories: CategoryResponse[];
}

const SingleResource:React.FC<SingleResource> = (props) => {

    const {title, content, postId, createdAt, categoryId} =  props.data;

    const date = new Date(createdAt ?? '');
    const formattedDate = date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    const categoryName = useMemo(() => {
        const category = props.categories.find(cat => cat.id === categoryId);
        return category ? category.name : 'Uncategorized';
    }, [categoryId, props.categories]);

    const sanitazedContent = useMemo(() => DOMPurify.sanitize(content ?? ''), [content])

    return (
        <li>
            <Link to={'/resource-post/$resourceId'} params={{resourceId: postId ?? ''}}>
                <div className='resource-wrapper'>
                    <div className="resource-top">
                        <div className="news-category">
                            <div className="cat-ball"></div>
                            <span>
                                    {categoryName}
                                </span>
                        </div>
                        <div className="created-at">
                            <img src={Clock} alt=""/>
                            <span>{formattedDate}</span>
                        </div>
                    </div>
                    <h6>
                        {title}
                    </h6>
                    <p
                        className='content-preview'
                        dangerouslySetInnerHTML={{__html: sanitazedContent}}
                    />
                </div>
            </Link>
        </li>
    );
};

export default SingleResource;