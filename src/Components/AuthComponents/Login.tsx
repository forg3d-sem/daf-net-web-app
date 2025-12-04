import React, {useState} from 'react';
import AuthTypeDisplay from "./AuthTypeDisplay";
import {Link, useNavigate} from "@tanstack/react-router";
import useLogin from "../../Hooks/useLogin.ts";


const Login = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()
    const {isPending, mutate} = useLogin();

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        console.log('submitted data')
        mutate({email: login, password: password}, {
            onSuccess: (data) => {
                console.log(data)
                localStorage.setItem('token', data?.data?.data?.accessToken as string)
                localStorage.setItem('id', data?.data?.data?.userId as string)
                navigate({to: '/'})
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }

    return (
        <>
            <AuthTypeDisplay isLogin={true}/>
            <form onSubmit={handleSubmit}>
                <div className="input-wrap">
                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id='email'
                        type="text"
                        placeholder='Enter your email'
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                </div>
                <div className="input-wrap">
                    <label htmlFor="password">Password</label>
                        <input
                            id='password'
                            type="password"
                            placeholder='Enter your password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    <Link
                        to='/login'
                    >
                        Forgot Password?
                    </Link>
                </div>
                <button
                    type='submit'
                    disabled={isPending}
                >
                    Sign In
                </button>
            </form>
        </>
    );
};

export default Login;