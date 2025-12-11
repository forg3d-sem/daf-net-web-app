import {Col, Container, Row} from "react-bootstrap";
import NoContent from "../../assets/no_groups.png";
import type {PostResponse} from "../../../APIs";
import React, {useState} from "react";
import NewsList from "./NewsList.tsx";
import useFetchCategories from "../../Hooks/Categories/useFetchCategories.ts";
import CreateNews from "./CreateNews.tsx";

interface News {
    data: PostResponse[];
    isLoading: boolean;
    error: string;
}

const News: React.FC<News> = (props) => {

    const {data: cats, isPending, error:catsError} = useFetchCategories('00000000-0000-0000-0000-000000000001', '', 1);
    const [showModal, setShowModal] = useState(false);

    return (
        <Container>
            <Row>
                {
                    props.data.length === 0 && !props.isLoading && !props.error &&

                    <Col>
                        <div className='empty-section'>
                            <img src={NoContent} alt="empty section"/>
                            <h3>
                                There are currently no news
                            </h3>
                            <p>
                                Be the first to publish news articles and keep everyone informed.
                            </p>
                            <button disabled>
                                Post news
                            </button>
                        </div>
                    </Col>
                }
                <div className="create-news">
                    <button
                        onClick={() => setShowModal(true)}
                        disabled={isPending}
                    >
                        Create news
                    </button>
                    <CreateNews
                        showModal={showModal}
                        handleHideModal={() => setShowModal(false)}
                        categories={cats?.data?.data?.categories ?? []}
                    />
                </div>

                {
                    (props.data && !props.isLoading && (!props.error || !catsError)) &&
                    <Col>
                        <NewsList
                            news={props.data}
                            categories={cats?.data?.data?.categories ?? []}
                        />
                    </Col>
                }
                {
                    props.error || catsError &&
                    <div className='post-error-message'>{props.error} {catsError?.message}</div>
                }

            </Row>
        </Container>
    );
};

export default News;