import React, {useState} from 'react';
import {Modal, Spinner} from "react-bootstrap";
import useGroupInvite from "../../Hooks/Group/useGroupInvite.ts";
import {useAppDispatch} from "../../store/storeHooks.ts";
import {notificationActions} from "../../store/slices/NotificationSlice.ts";
import Search from '../../assets/search.svg';
import useSearchProfile from "../../Hooks/Profile/useSearchProfiles.ts";
import {useQueryClient} from "@tanstack/react-query";

interface AddMembersModal {
    show: boolean;
    toggleModal: () => void;
    groupId: string
}

const AddMembersModal: React.FC<AddMembersModal> = ({show, toggleModal, groupId}) => {

    const dispatch = useAppDispatch();

    const queryClient = useQueryClient();

    const [searchInput, setSearchInput] = useState('')

    const {mutate, isPending} = useGroupInvite();

    const {data, isLoading, error} = useSearchProfile(searchInput);

    const handleAddUser = (userId: string) => {
        mutate({groupId: groupId, userId: userId}, {
            onSuccess: () => {
                toggleModal();
                dispatch(notificationActions.setNotification({type: 'success', text: 'User added'}));
                queryClient.invalidateQueries({queryKey: ['singleGroup', groupId]});
                queryClient.invalidateQueries({queryKey: ['groups']});
                queryClient.invalidateQueries({queryKey: ['groupMembers', groupId]});
            },
            onError: (e) => {
                dispatch(notificationActions.setNotification({type: 'error', text: e.message}))
            }
        })
    }

    return (
        <Modal
            show={show}
            onHide={toggleModal}
            className='add-user-modal'
        >
            <Modal.Header>
                <h3>Members</h3>
            </Modal.Header>
            <Modal.Body>
                <div className="search-input-wrap">
                    <img src={Search} alt=""/>
                    <input
                        type="text"
                        value={searchInput}
                        placeholder='Search users'
                        onChange={e => setSearchInput(e.target.value)}
                    />
                </div>
                <div className="table-wrap">
                <table>
                    <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Username</th>
                        <th scope='col'>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        (data?.data?.profiles &&
                        data?.data?.profiles?.length > 0 &&
                        !error) &&
                        data?.data?.profiles.map(m =>
                            <tr
                                className='user-row'
                                key={m.userId}

                            >
                                <td>
                                    {`${m.firstName} ${m.lastName}`}
                                </td>
                                <td>{m.username}</td>
                                <td className='email-td'>
                                    {m.email}
                                    <button
                                        className='add-user'
                                        onClick={() => handleAddUser(m.userId ?? '')}
                                        disabled={isPending}
                                    >
                                        add
                                    </button>
                                </td>
                            </tr>)
                    }
                    </tbody>
                </table>
                </div>
                {
                    isLoading
                    &&
                    <div className='d-flex justify-content-center w-100 my-4'>
                        <Spinner animation='border'/>
                    </div>
                }
                {
                    (!isLoading && error) &&
                    <div className='d-flex justify-content-center'>
                        {error.message}
                    </div>
                }
            </Modal.Body>
        </Modal>
    );
};

export default AddMembersModal;