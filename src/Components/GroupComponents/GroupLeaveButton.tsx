import React from 'react';
import {Link, useNavigate} from "@tanstack/react-router";
import {Spinner} from "react-bootstrap";
import {notificationActions} from "../../store/slices/NotificationSlice.ts";
import useLeaveGroup from "../../Hooks/Group/useLeaveGroup.ts";
import {useAppDispatch} from "../../store/storeHooks.ts";

interface GroupLeaveButton {
    isOwner: boolean;
    id: string | undefined | null
}

const GroupLeaveButton: React.FC<GroupLeaveButton> = (props: GroupLeaveButton) => {

    const {isOwner, id} = props;

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const {mutate, isPending} = useLeaveGroup();

    const handleLeaveGroup = () => {
        mutate(id ?? '', {
            onSuccess: () => {
                dispatch(notificationActions.setNotification({type: 'success', text: 'Group left'}));
                navigate({to: '/groups', replace: true})
            },
            onError: () => {
                dispatch(notificationActions.setNotification({type: 'error', text: 'Failed to leave the group'}));
            }
        })
    }



    if (id === "00000000-0000-0000-0000-000000000001") return null;

    else return (
        <>
            {
                isOwner
                    ?
                    <Link className='manage-group-btn' to='/groups/my/$groupId' params={{groupId: id ?? ''}}>
                        Manage group
                    </Link>
                    :
                    <button
                        onClick={handleLeaveGroup}
                    >
                        {
                            isPending
                                ?
                                <Spinner animation='border'/>
                                :
                                "Leave the group"
                        }
                    </button>
            }
        </>
    )
};

export default GroupLeaveButton;