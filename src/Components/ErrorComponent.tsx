import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

interface ErrorComponent {
    error: Error
}

const ErrorComponent:React.FC<ErrorComponent> = ({error}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h2 className='page-error-title'>
                        {error.name}
                    </h2>
                    <p className='page-error-message'>
                        {error.message}
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default ErrorComponent;