import React, {useMemo} from 'react';
import {nanoid} from "nanoid/non-secure";
import {Link} from "@tanstack/react-router";
import type {CategoryResponse} from "../../../APIs";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

interface CategorySelector {
    categories: CategoryResponse[];
}

const CategorySelector: React.FC<CategorySelector> = ({categories}) => {

    const catsToShow = useMemo(() => [{id: '0', name: "All categories"}, ...categories], [categories]);

    return (
        <div className='category-selector'>
            <Swiper
                spaceBetween={25}
                slidesPerView={'auto'}
            >
                {catsToShow.map(cat =>
                    <SwiperSlide key={nanoid()} style={{width: 'auto'}}>
                        <Link
                            to={cat.id === '0' ? "/" : "/forum/$categoryId"}
                            params={{categoryId: cat.id ?? ''}}
                        >
                            {cat.name}
                        </Link>
                    </SwiperSlide>
                )
                }
            </Swiper>
        </div>
        // <ul className='category-selector'>
        //     {
        //         catsToShow.map(cat =>
        //             <li key={nanoid()}>
        //                 <Link
        //                     to={cat.id === '0' ? "/" : "/forum/$categoryId"}
        //                     params={{categoryId: cat.id ?? ''}}
        //                 >
        //                     {cat.name}
        //                 </Link>
        //             </li>
        //         )
        //     }
        // </ul>
    );
};

export default CategorySelector;