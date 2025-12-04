import React, {createContext} from 'react';
import {Toast, ToastContainer} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../store/storeHooks.ts";
import {notificationActions} from "../../store/slices/NotificationSlice.ts";
import './toastStyles.scss';

interface ToastChildren {
    children: React.ReactNode
}

type ToastType = 'error' | 'warning' | 'success' | null

type ToastContext = {
    handleMessage: (message: string, type: ToastType) => void
}

const ToastContext = createContext<ToastContext | null>(null)

const ToastProvider:React.FC<ToastChildren> = (props) => {

    const dispatch = useAppDispatch()

    const message = useAppSelector(state => state.notifications);


    return (
        <>
            <ToastContainer className='test-classname' position='top-end'>
                <Toast className={message.notificationType ? `toast-base toast-${message.notificationType}` : 'toast-base'} show={!!message.notificationText} autohide delay={3000} onClose={() => dispatch(notificationActions.resetNotificationData())}>
                    {message.notificationText}
                </Toast>
            </ToastContainer>
            {props.children}
        </>
    );
};

export default ToastProvider;