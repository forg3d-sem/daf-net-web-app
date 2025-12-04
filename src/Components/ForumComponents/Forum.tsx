import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CategorySelector from "./CategorySelector.tsx";
import CreatePostBanner from "./CreatePostBanner.tsx";
import "./forumStyles.scss";
import ForumPostsList from "./ForumPostsList.tsx";
import type {PostResponse} from "../../../API_backup";
// import {useQueryClient} from "@tanstack/react-query";

interface Forum {
    posts: PostResponse[];
    postsLoading: boolean;
    postsError: string;
    categoryId: string | null

}

const Forum: React.FC<Forum>= () => {

    // const [page, setPage] = useState(1);
    // const {data: postsData, isLoading: loadingPosts, error: postsError} = useFetchPost(page, props.category ?? '');
    // const {data: cats, isLoading: loadingCats, error: catsError} = useFetchCategories('00000000-0000-0000-0000-000000000001', '', 1);

    const categories = [
        {name: 'All categories', id: '0'},
        { id: "1", name: "Silvopasture" },
        { id: "2", name: "Forest Farming" },
        { id: "3", name: "Alley Cropping" },
        { id: "4", name: "Windbreaks & Shelterbelts" },
        { id: "5", name: "Riparian Buffers" },
        { id: "6", name: "Agroforestry Tree Species" },
        { id: "7", name: "Soil Conservation Systems" },
        { id: "8", name: "Carbon Sequestration Projects" },
        { id: "9", name: "Sustainable Timber Production" },
        { id: "10", name: "Perennial Crop Integration" }
    ];
    // const queryClient = useQueryClient();

    const posts = [
        {
            postId: "post-001",
            profile: {
                userId: "user-101",
                imageUrl: "https://example.com/images/farmer_john.jpg",
                username: "greenFields",
                firstName: "John",
                lastName: "Miller"
            },
            title: "Soil Preparation for Spring Wheat",
            content:
                "Spent the morning plowing the east field and adding organic compost. Soil moisture looks perfect after last week's rainfall.",
            createdAt: "2025-12-03T10:22:11.000Z"
        },
        {
            postId: "post-002",
            profile: {
                userId: "user-102",
                imageUrl: "https://example.com/images/farmer_sophia.jpg",
                username: "sunriseAgro",
                firstName: "Sophia",
                lastName: "Ivanova"
            },
            title: "New Drip Irrigation Setup Installed",
            content:
                "Installed drip irrigation across the vegetable plots. Expecting better water efficiency and more uniform crop growth.",
            createdAt: "2025-12-02T14:45:33.000Z"
        },
        {
            postId: "post-003",
            profile: {
                userId: "user-103",
                imageUrl: "https://example.com/images/agro_specialist.jpg",
                username: "cropDoctor",
                firstName: "Liam",
                lastName: "Chen"
            },
            title: "Corn Leaf Fungus Detected Early",
            content:
                "Found early signs of leaf blight in the north field. Planning preventive spraying before the weekend.",
            createdAt: "2025-12-01T19:05:12.000Z"
        },
        {
            postId: "post-004",
            profile: {
                userId: "user-104",
                imageUrl: "https://example.com/images/grape_farmer.jpg",
                username: "vineMaster",
                firstName: "Marco",
                lastName: "Rossi"
            },
            title: "Winter Pruning Completed in the Vineyard",
            content:
                "Finished pruning all 2 hectares before the frost arrives. Vines are looking strong for next season.",
            createdAt: "2025-11-30T08:12:47.000Z"
        },
        {
            postId: "post-005",
            profile: {
                userId: "user-105",
                imageUrl: "https://example.com/images/beekeeper.jpg",
                username: "honeyHarvester",
                firstName: "Anna",
                lastName: "Petrova"
            },
            title: "Bee Colonies Preparing for Winter",
            content:
                "Checked all hives today. Colonies are active, healthy, and well-fed. Added insulation around hive boxes.",
            createdAt: "2025-11-29T17:55:03.000Z"
        }
    ]

    return (
        <Container>
            <Row className='justify-content-center'>
                <Col lg={8}>
                    <>
                        <CategorySelector
                            categories={categories}
                        />
                        <CreatePostBanner
                            categories={categories}
                        />
                        <ForumPostsList
                            posts={posts}
                        />
                    </>
                    {/*{*/}
                    {/*    postsData && categories &&*/}
                    {/*    <>*/}
                    {/*        <CategorySelector*/}
                    {/*            categories={categories?.data.data?.categories ?? []}*/}
                    {/*        />*/}
                    {/*        <CreatePostBanner/>*/}
                    {/*        <ul className='forums-list'>*/}
                    {/*            {*/}
                    {/*                postsData?.data?.data?.posts?.map((post) =>*/}
                    {/*                    <SinglePost key={post.postId} data={post} isPostPage={false}/>*/}
                    {/*                )*/}
                    {/*            }*/}
                    {/*        </ul>*/}
                    {/*    </>*/}
                    {/*}*/}
                    {/*{*/}
                    {/*    (loadingPosts || loadingCats) &&*/}
                    {/*    <div className='error-wrapper d-flex justify-content-center align-items-center'>*/}
                    {/*        <Spinner animation='border' role='status'/>*/}
                    {/*    </div>*/}
                    {/*}*/}
                    {/*{*/}
                    {/*    (postsError || catsError) &&*/}
                    {/*    <div>*/}
                    {/*        {postsError?.message}*/}
                    {/*        {catsError?.message}*/}
                    {/*    </div>*/}
                    {/*}*/}
                </Col>
            </Row>
        </Container>
    );
};

export default Forum;