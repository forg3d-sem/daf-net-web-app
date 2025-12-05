import React, {useState} from 'react';
import useRegister from "../../Hooks/Auth/useRegister.ts";
import AuthTypeDisplay from "./AuthTypeDisplay.tsx";
import {useNavigate} from "@tanstack/react-router";
import {notificationActions} from "../../store/slices/NotificationSlice.ts";
import {useAppDispatch} from "../../store/storeHooks.ts";
import {Spinner} from "react-bootstrap";

const Registration:React.FC = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch();

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('')

    const {isPending, mutate} = useRegister();

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        const data = {
            firstName: name,
            lastName: lastName,
            email: email,
            userName: userName,
            password: password
        }
        console.log('submitted data')
        mutate(data, {
            onSuccess: () => {
                navigate({to: '/verify-email', search: {email: email}})
            },
            onError: (error) => {
                dispatch(notificationActions.setNotification({
                    type: 'error',
                    text: error.message,
                }))
            }
        })
    }

    return (
        <>
            <AuthTypeDisplay isLogin={false}/>
            <form className='registration-form' onSubmit={handleSubmit}>
                <div className="input-wrap">
                    <label htmlFor="name">
                        Your name
                    </label>
                    <div className="double-input">
                        <input
                            id='name'
                            className='name-input'
                            type="text"
                            placeholder='First name'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            id='lastname'
                            className='name-input'
                            type="text"
                            placeholder='Last name'
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="input-wrap">
                    <label htmlFor="reg-email">
                        Email Address
                    </label>
                    <input
                        id='reg-email'
                        type="email"
                        placeholder='Your email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-wrap">
                    <label htmlFor="username">
                        Username
                    </label>
                    <input
                        id='username'
                        type="text"
                        placeholder='Your username'
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />
                </div>
                <div className="input-wrap">
                    <label htmlFor="reg-password">
                        Password
                    </label>
                    <input
                        id='reg-password'
                        type="password"
                        placeholder='Your password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button
                    type='submit'
                    disabled={isPending}
                >
                    {
                        isPending
                        ?
                            <Spinner animation='border'/>
                            :
                            "Create account"
                    }
                </button>
            </form>
        </>
    );
};

export default Registration;