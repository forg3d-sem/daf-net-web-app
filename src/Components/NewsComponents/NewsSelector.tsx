import React, {useMemo} from 'react';
import {nanoid} from "nanoid/non-secure";
import {Link} from "@tanstack/react-router";
import type {CategoryResponse} from "../../../APIs";

interface CategorySelector {
    categories: CategoryResponse[];
}

const NewsSelector: React.FC<CategorySelector> = ({categories}) => {

    const catsToShow = useMemo(() => [{id: '0', name: "All categories"}, ...categories], [categories]);

    return (
        <div className='news-selector-wrapper'>
            <ul className='category-selector'>
                {
                    catsToShow.map(cat =>
                        <li key={nanoid()}>
                            <Link
                                to={cat.id === '0' ? "/" : "/forum/$categoryId"}
                                params={{categoryId: cat.id ?? ''}}
                            >
                                {cat.name}
                            </Link>
                        </li>
                    )
                }
            </ul>
            <button className='create-news-btn'>Create News</button>
        </div>
    );
};

export default NewsSelector;