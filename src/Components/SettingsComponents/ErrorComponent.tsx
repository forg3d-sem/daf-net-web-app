import React from 'react';

interface ErrorComponent {
    message: string;
    refetch: () => void;
}

const ErrorComponent:React.FC<ErrorComponent> = (props) => {
    return (
        <div className='error-wrapper'>
            <div className='error-message'>
                {props.message}
            </div>
            <button onClick={props.refetch}>
                Retry
            </button>
        </div>
    );
};

export default ErrorComponent;