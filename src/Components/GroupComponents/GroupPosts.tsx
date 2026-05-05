import {Spinner} from "react-bootstrap";
import ForumPostsList from "../ForumComponents/ForumPostsList.tsx";
import type { CategoryResponse } from "../../../APIs/api.ts";
import useFetchAllPosts from "../../Hooks/Posts/useFetchAllPosts.ts";
import {useMemo, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {nanoid} from "nanoid/non-secure";
import "swiper/css";

const GroupPosts = ({id, categories}:{id:string, categories: CategoryResponse[]}) => {

    const {data: allPosts, isLoading: loadingPosts, error: postsError} = useFetchAllPosts(id);

    const catsToShow = useMemo(() => [{id: '0', name: "All categories"}, ...categories], [categories]);

    const [selectedCategory, setSelectedCategory] = useState('0');
    const [filteredCategories, setFilteredCategories] = useState(allPosts?.data?.data?.posts);

    const handleCategorySelect = (categoryId: string) => {
        let filteredCats;

        if (categoryId === '0') {
            filteredCats = allPosts?.data?.data?.posts;
        } else {
            filteredCats = allPosts?.data?.data?.posts?.filter((post) => post.categoryId === categoryId) ?? [];
        }


        setSelectedCategory(categoryId);

        setFilteredCategories(filteredCats)
    }

    if (loadingPosts) {
        return(
            <div className='w-100 d-flex justify-content-center'>
                <Spinner
                    animation='border'
                />
            </div>
        );
    }

    if (postsError) {
        return(
        <div className='w-100 text-center'>
            {postsError.message}
        </div>
        )
    }

    return(
        <>
            <Swiper
                className='group-category-selector'
                spaceBetween={25}
                slidesPerView={'auto'}
            >
                {catsToShow.map(cat =>
                    <SwiperSlide key={nanoid()} style={{width: 'auto'}}>
                        <button
                            className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                            onClick={
                                () => handleCategorySelect(cat.id ?? '0')
                            }
                        >
                            {cat.name}
                        </button>
                    </SwiperSlide>
                )
                }
            </Swiper>
            <ForumPostsList
                posts={filteredCategories ?? []}
            />
        </>
    );
};

export default GroupPosts;