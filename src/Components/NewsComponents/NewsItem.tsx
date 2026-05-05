import React, {useMemo} from 'react';
import {Link} from "@tanstack/react-router";
import type {PostResponse, CategoryResponse} from "../../../APIs";
import NewsIcon from '../../assets/newspaper-folded.svg';
import Clock from '../../assets/clock_icon.svg'
import DOMPurify from "dompurify";

interface NewsItem {
    data: PostResponse;
    categories: CategoryResponse[];
}

const NewsItem: React.FC<NewsItem> = (props) => {

    const apiUrl = import.meta.env.VITE_API_URL;

    const {postId, title, createdAt, categoryId, content, imageUrl} = props.data;
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
        <li className='grid-item'>
            <Link to='/news/$newsId' params={{newsId: postId ?? ''}}>
                <div className="news-content">
                    <div className="image-container">
                        {
                            imageUrl
                                ?
                                <div style={{backgroundImage: `url("${apiUrl}${imageUrl}")`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100%', width: '100%'}}></div>
                                :
                                <img src={NewsIcon} alt="newspapper"/>
                        }

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
                        <p className='news-text' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content ?? '')}}>
                        </p>
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