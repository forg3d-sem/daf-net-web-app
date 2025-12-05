import React, {useMemo} from 'react';
import {Link} from "@tanstack/react-router";
import type {PostResponse} from "../../../APIs";
import NewsIcon from '../../assets/newspaper-folded.svg';
import type {CategoryResponse} from "../../../APIs";
import Clock from '../../assets/clock_icon.svg'

interface NewsItem {
    data: PostResponse;
    categories: CategoryResponse[];
}

const NewsItem: React.FC<NewsItem> = (props) => {

    const {postId, title, createdAt, categoryId} = props.data;
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

    return (
        <li>
            <Link to='/news-post/$newsId' params={{newsId: postId ?? ''}}>
                <div className="news-content">
                    <div className="image-container">
                        <img src={NewsIcon} alt="newspapper"/>
                    </div>
                    <div className="news-data">
                        <div>
                            <div className="news-category">
                                <div className="cat-ball"></div>
                                <span>
                                    {categoryName}
                                </span>
                            </div>
                            <h6 className="news-title">
                                {title}
                            </h6>
                        </div>
                        <div className="news-bottom-row">
                            <div className="created-at">
                                <img src={Clock} alt=""/>
                                <span>{formattedDate}</span>
                            </div>
                            {}
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default NewsItem;