import React from 'react';
import useFetchGroupMembers from "../../Hooks/Group/useFetchGroupMembers.ts";
import {Spinner} from "react-bootstrap";
import useKickUser from "../../Hooks/Group/useKickUser.ts";
import Bin from '../../assets/delete_bin.svg';
import {useAppDispatch} from "../../store/storeHooks.ts";
import {notificationActions} from "../../store/slices/NotificationSlice.ts";
import {useQueryClient} from "@tanstack/react-query";

interface GroupMembersList {
    id: string;
    allowAdding: boolean;
    allowDelete: boolean;
    toggleModal?: () => void;
}

const GroupMembersList: React.FC<GroupMembersList> = ({id, allowAdding, allowDelete, toggleModal}) => {

    const {data, isLoading, error} = useFetchGroupMembers(id);
    const totalCount = data?.data?.data?.totalCount ?? 0;
    const members = data?.data?.data?.members;

    const queryClient = useQueryClient();
    const dispatch = useAppDispatch()

    const {mutate, isPending} = useKickUser()

    const handleDeleteUser = (userId: string) => {
        mutate({userId: userId, groupId: id}, {
            onSuccess: () => {
                dispatch(notificationActions.setNotification({type: 'success', text: 'Group member removed'}));
                queryClient.invalidateQueries({queryKey: ['groupMembers', id]});
                queryClient.invalidateQueries({queryKey: ['singleGroup', id]});
            },
            onError: (e) => {
                dispatch(notificationActions.setNotification({type: 'error', text: e.message}));
            }
        })
    }

    if (isLoading) return (
        <div className='members-loading'>
            <Spinner animation='border'/>
        </div>
    )
    if (error && !isLoading) return (
        <div className='members-error'>{error.message}</div>
    );
    if (totalCount === 0 && allowAdding && !isLoading) return (
        <div className='members-empty'>
            <div className='members-empty__text'>
                Please add members to this group
            </div>
            <button
                onClick={() => toggleModal ? toggleModal() : null}
                className='members-empty__btn'
            >
                Add Member
            </button>
        </div>
    );
    if (totalCount > 0 && members && !isLoading) return (
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
                members.map(m =>
                    <tr className='user-row' key={m.userId}>
                        <td>
                            {`${m.firstName} ${m.lastName}`}
                        </td>
                        <td>{m.userName}</td>
                        <td className='email-td'>
                            {m.email}
                            {
                                allowDelete
                                &&
                                <button
                                    disabled={isPending}
                                    onClick={() => handleDeleteUser(m.userId ?? '')}
                                >
                                    <img src={Bin} alt="delete user"/>
                                </button>
                            }
                        </td>
                    </tr>)
            }
            </tbody>
        </table>
    );
};

export default GroupMembersList;