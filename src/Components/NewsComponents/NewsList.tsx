import React from 'react';
import type {CategoryResponse, PostResponse} from "../../../APIs";
import NewsItem from "./NewsItem.tsx";

interface NewsList {
    news: PostResponse[];
    categories: CategoryResponse[];
}

const NewsList:React.FC<NewsList> = (props) => {
    return (
        <ul className='news-list'>
            {
                props.news.map(item => <NewsItem key={item.postId} data={item} categories={props.categories}/>)
            }
        </ul>
    );
};

export default NewsList;