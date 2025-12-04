import React, {useState} from 'react';
import useVerifyEmail from "../../Hooks/useVerifyEmail.ts";
import {Spinner} from "react-bootstrap";
import {useNavigate} from "@tanstack/react-router";
import {useAppDispatch} from "../../store/storeHooks.ts";
import {notificationActions} from "../../store/slices/NotificationSlice.ts";

interface VerifyEmail {
    email: string;
}

const VerifyEmail: React.FC<VerifyEmail> = (props) => {

    const dispatch = useAppDispatch();

    const [code, setCode] = useState('');

    const {isPending, mutate} = useVerifyEmail();

    const navigate = useNavigate()

    const handleCodeSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        mutate(
            {email: props.email, confirmationCode: code},
            {
                onSuccess: () => {
                    dispatch(notificationActions.setNotification({
                        type: 'success',
                        text: "Account verified successfully! You can now log in.",
                    }))
                    navigate({to: '/login'})
                },
                onError: (error) => {
                    dispatch(notificationActions.setNotification({
                        type: 'error',
                        text: error.message,
                    }))
                }
            }
        )
    }

    return (
        <div className='verify-container'>
            <h1>Verify Your Email</h1>
            <p>Code has been sent to <b>{props.email}</b></p>
            <form onSubmit={handleCodeSubmit}>
                <input
                    type="text"
                    value={code}
                    onChange={e => setCode(e.target.value)}
                />
                <button
                    type={"submit"}
                    disabled={isPending}
                >
                    {
                        isPending
                            ?
                            <Spinner animation='border'/>
                            :
                            "Finish"
                    }
                </button>
            </form>
        </div>
    );
};

export default VerifyEmail;