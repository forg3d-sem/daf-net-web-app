import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './authStyles.scss';
import authImg from '../../assets/auth_img.png';

interface AuthBase {
    children: React.ReactNode;

}

const AuthBase:React.FC<AuthBase> = (props) => {
    return (
        <div className='auth-bg'>
            <Container className='h-100'>
                <Row>
                    <Col>
                        <div className="auth-base d-flex">
                            <div className="auth-logo-side d-none d-lg-flex">
                                <div className="top-logo">
                                    Some random text to test positioning
                                </div>
                                <img src={authImg} alt=""/>
                            </div>
                            <div className="auth-content-side">
                                {props.children}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default AuthBase;