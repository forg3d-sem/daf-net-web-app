import React from 'react';
import {Col, Container, Row, Spinner} from "react-bootstrap";
import CategorySelector from "./CategorySelector.tsx";
import CreatePostBanner from "./CreatePostBanner.tsx";
import "./forumStyles.scss";
import ForumPostsList from "./ForumPostsList.tsx";
import type {PostResponse} from "../../../APIs";
import useFetchCategories from "../../Hooks/Categories/useFetchCategories.ts";

interface Forum {
    posts: PostResponse[];
    postsLoading: boolean;
    postsError: string;
    refetch: () => void;

}

const Forum: React.FC<Forum>= (props) => {

    const {data: cats, isLoading: loadingCats, error: catsError} = useFetchCategories('00000000-0000-0000-0000-000000000001', '', 1);

    // const queryClient = useQueryClient();

    return (
        <Container>
            <Row className='justify-content-center'>
                <Col lg={8}>
                    {/*<>*/}
                    {/*    <CategorySelector*/}
                    {/*        categories={cats?.data?.data?.categories ?? []}*/}
                    {/*    />*/}
                    {/*    <CreatePostBanner*/}
                    {/*        categories={cats?.data?.data?.categories ?? []}*/}
                    {/*    />*/}
                    {/*    <ForumPostsList*/}
                    {/*        posts={posts}*/}
                    {/*    />*/}
                    {/*</>*/}

                    {
                        (cats && !loadingCats) &&
                        <CategorySelector
                            categories={cats?.data?.data?.categories ?? []}
                        />
                    }

                            <CreatePostBanner
                                categories={cats?.data?.data?.categories ?? []}
                                refetch={props.refetch}
                            />
                    {
                        (!props.postsLoading && props.posts) &&
                        <ForumPostsList
                            posts={props.posts}
                        />
                    }
                    {
                        (props.postsLoading || loadingCats) &&
                        <div className='error-wrapper d-flex justify-content-center align-items-center'>
                            <Spinner animation='border'/>
                        </div>
                    }
                    {
                        ((props.postsError || catsError) && !props.postsLoading && !loadingCats) &&
                        <div>
                            {props.postsError}
                            {catsError?.message}
                        </div>
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Forum;