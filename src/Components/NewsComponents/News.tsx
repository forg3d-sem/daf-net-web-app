import {Col, Container, Row} from "react-bootstrap";
import NoContent from "../../assets/no_groups.png";

const News = () => {
    return (
        <Container>
            <Row>
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
            </Row>
        </Container>
    );
};

export default News;