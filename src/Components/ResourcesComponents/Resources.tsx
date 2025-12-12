import NoContent from "../../assets/no_groups.png";
import './resourcesStyles.scss';
import {Col, Container, Row} from "react-bootstrap";
import type {PostResponse} from "../../../APIs";
import React from "react";
import SingleResource from "./SingleResource.tsx";
import useFetchCategories from "../../Hooks/Categories/useFetchCategories.ts";
import '../NewsComponents/newsStyles.scss';
import ResourcePublication from "./ResourcePublication.tsx";

interface Resources {
    data: PostResponse[];
    isLoading: boolean;
    error: string | null | undefined;
}

const Resources: React.FC<Resources> = (props) => {

    const {data, isLoading, error} = props;

    const {data: cats} = useFetchCategories('00000000-0000-0000-0000-000000000001', '', 1);

    return (
        <Container>
            <Row>
                <Col lg={8} className='order-2 order-lg-1'>
                    {data.length === 0 && !isLoading && !error &&
                        <div className='empty-section'>
                            <img src={NoContent} alt="empty section"/>
                            <h3>
                                There are currently no resources
                            </h3>
                            <p>
                                You can submit a request to create a personal learning resource, and our administrator
                                will review and publish it.
                            </p>
                            <button disabled>
                                Create resource
                            </button>
                        </div>
                    }
                    {
                        data.length > 0 && !isLoading && !error &&
                        <ul>
                            {
                                data.map(resource => <SingleResource data={resource} key={resource?.postId}
                                                                     categories={cats?.data?.data?.categories ?? []}/>)
                            }
                        </ul>
                    }
                </Col>
                <Col className='order-1 order-lg-2' lg={4}>
                    <ResourcePublication
                        // categories={cats?.data?.data?.categories ?? []}
                        // refetch={refetch}
                    />
                </Col>
            </Row>
        </Container>

    );
};

export default Resources;