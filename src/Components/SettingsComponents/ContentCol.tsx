import React from 'react';
import {Col} from "react-bootstrap";

const ContentCol:React.FC<{children:React.ReactNode}> = (props) => {
    return (
        <Col className='content-column'>
            {props.children}
        </Col>
    );
};

export default ContentCol;