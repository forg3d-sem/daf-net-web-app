import {Col, Container, Row} from "react-bootstrap";
import {Link} from "@tanstack/react-router";
import './notFound.scss';

export const NotFound = () => {
    return (
        <div className='not-found-bg'>
            <Container>
                <Row>
                    <Col className='not-found-body'>
                        <h1>
                            <strong>404</strong>
                            <br/>
                            Page Not Found
                        </h1>
                        <p>
                            The page you are looking for does not exist. Please check the URL or return to the homepage.
                        </p>
                        <Link to='/' className='not-found-body__link'>
                            Go to Homepage
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
