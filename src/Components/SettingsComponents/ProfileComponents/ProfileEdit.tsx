import React, {useState} from 'react';
import ProfileIconComponent from "./ProfileIconComponent.tsx";
// import DeleteBin from '../../../assets/delete_bin.svg';
import type {ProfileResponse} from "../../../../APIs";
import useUpdateProfile from "../../../Hooks/Profile/useUpdateProfile.ts";
import {useAppDispatch} from "../../../store/storeHooks.ts";
import {notificationActions} from "../../../store/slices/NotificationSlice.ts";

interface ProfileEdit {
    data:ProfileResponse
}

const ProfileEdit: React.FC<ProfileEdit> = ({data}) => {

    const dispatch = useAppDispatch();

    const [email, setEmail] = useState(data.email ?? '');
    const [login, setLogin] = useState(data.username ?? '');
    const [name, setName] = useState(data.firstName ?? '');
    const [lastName, setLastName] = useState(data.lastName ?? '');
    const [about, setAbout] = useState(data.about ?? '');

    const {isPending, mutate} = useUpdateProfile();

    const handleUpdate = () => {

        //add email when Eugene will extend API
        mutate({ firstName: name, lastName: lastName, username: login, about: about}, {
            onSuccess: (data) => {

                const dataObj = data.data.data;

                setEmail(dataObj?.email ?? '');
                setName(dataObj?.firstName ?? '');
                setLastName(dataObj?.lastName ?? '');
                setAbout(dataObj?.about ?? '');
                setLogin(dataObj?.username ?? '');

                dispatch(notificationActions.setNotification({text: 'Profile updated successfully!', type: 'success'}))
        },
            onError: (e => console.log(e))
        })
    }

    return (
        <>
            <div className="edit-top-row">
                <div className="photo-editing">
                    <ProfileIconComponent url={''} name={name} lastName={lastName} maxSize={90}/>
                    {/*<button className='change-photo-btn'>*/}
                    {/*    Change photo*/}
                    {/*</button>*/}
                    {/*<button className='delete-photo-btn'>*/}
                    {/*    <img src={DeleteBin} alt=""/>*/}
                    {/*</button>*/}
                </div>
                <button
                    className='saveBtn'
                    disabled={isPending}
                    onClick={handleUpdate}
                >
                    Save
                </button>
            </div>
            <div className="edit-profile-double">
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id='email'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="login">Login</label>
                    <input
                        id='login'
                        type="text"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </div>
            </div>
            <div className="edit-profile-double">
                <div className="input-group">
                    <label htmlFor="name">Your name</label>
                    <input
                        id='name'
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="lastname">‎ </label>
                    <input
                        id='lastname'
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
            </div>
            <div className="edit-profile-about">
                <label htmlFor="about">About yourself</label>
                <textarea
                    name="about"
                    id="about"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                />
            </div>
        </>
    );
};

export default ProfileEdit;