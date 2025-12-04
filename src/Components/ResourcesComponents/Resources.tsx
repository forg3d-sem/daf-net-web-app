import NoContent from "../../assets/no_groups.png";
import './resourcesStyles.scss';
import {Col, Container, Row} from "react-bootstrap";

const Resources = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className='empty-section'>
                        <img src={NoContent} alt="empty section"/>
                        <h3>
                            There are currently no resources
                        </h3>
                        <p>
                            You can submit a request to create a personal learning resource, and our administrator will review and publish it.
                        </p>
                        <button disabled>
                            Create resource
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>

    );
};

export default Resources;