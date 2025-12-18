import {createFileRoute, useNavigate} from '@tanstack/react-router'
import EditGroup from "../../../Components/GroupComponents/EditGroup.tsx";
import useCreateGroup from "../../../Hooks/Group/useCreateGroup.ts";
import type { GroupCreateRequest } from "../../../../APIs";
import {useAppDispatch} from "../../../store/storeHooks.ts";
import {notificationActions} from "../../../store/slices/NotificationSlice.ts";
import {useQueryClient} from "@tanstack/react-query";

export const Route = createFileRoute('/(protected)/groups/create')({
  component: RouteComponent,
})

function RouteComponent() {

    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const dispatch = useAppDispatch();

    const {mutate, isPending} = useCreateGroup();

    const handleGroupCreate = (data:GroupCreateRequest) => {
        mutate(data, {
            onSuccess: () => {
                dispatch(notificationActions.setNotification({type: 'success', text: 'Group create successfully'}));
                queryClient.invalidateQueries({queryKey: ['groups']});
                navigate({to: '/groups', replace: true});
            },
            onError: (e) => {
                dispatch(notificationActions.setNotification({type: 'error', text: e.message}));
            }
        })
    }

  return <EditGroup data={null} handleGroupData={handleGroupCreate} isPending={isPending}/>
}
