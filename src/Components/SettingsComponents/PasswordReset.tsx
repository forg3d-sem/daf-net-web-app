import React, {useState} from 'react';
import PassIcon from '../../assets/password_input_icon.svg';
import TogglePassIcon from '../../assets/toggle_password.svg';

const PasswordReset:React.FC = () => {

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showNewPass, setShowNewPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);

    return (
        <>
            <div className="reset-top-row">
                <h1>Change password</h1>
                <button>Save</button>
            </div>
            <div className="password-group">
                <label htmlFor="old-password">
                    Old password
                </label>
                <div className='input-border'>
                    <img className='password-icon' src={PassIcon} alt="Password lock"/>
                    <input
                        id='old-password'
                        type='password'
                        placeholder='Input old password'
                        value={oldPassword}
                        onChange={e => setOldPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className="password-group">
                <label htmlFor="new-password">New password</label>
                <div className='input-border'>
                    <img className='password-icon' src={PassIcon} alt="Password lock"/>
                    <input
                        id='new-password'
                        type={showNewPass ? 'text' : 'password'}
                        placeholder='Input new password'
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                    />
                    <button onClick={() => setShowNewPass(p => !p)}>
                        <img src={TogglePassIcon} alt=""/>
                    </button>
                </div>
            </div>
            <div className="password-group">
                <label htmlFor="confirm-password">Confirm new password</label>
                <div className='input-border'>
                    <img className='password-icon' src={PassIcon} alt="Password lock"/>
                    <input
                        id='confirm-password'
                        type={showConfirmPass ? 'text' : 'password'}
                        placeholder='Input new password one more time'
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                    <button onClick={() => setShowConfirmPass(p => !p)}>
                        <img src={TogglePassIcon} alt=""/>
                    </button>
                </div>
            </div>
        </>
    );
};

export default PasswordReset;