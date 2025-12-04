import React from 'react';
import {Link} from "@tanstack/react-router";

interface AuthTypeDisplay {
    isLogin: boolean
}

const AuthTypeDisplay: React.FC<AuthTypeDisplay> = (props) => {
    return (
        <div className="auth-type">
            <Link to='/login' className={props.isLogin ? "type selected" : "type"}>
                Sign In
            </Link>
            <Link to='/registration' className={props.isLogin ? "type" : "type selected"}>
                Sign Up
            </Link>
        </div>
    );
};

export default AuthTypeDisplay;