import {createFileRoute} from '@tanstack/react-router'
import EditGroup from "../../../../Components/GroupComponents/EditGroup.tsx";
import useFetchGroupById from "../../../../Hooks/Group/useFetchGroupById.ts";
import ErrorComponent from "../../../../Components/ErrorComponent.tsx";
import SettingsLoader from "../../../../Components/SettingsComponents/SettingsLoader.tsx";
import useUpdateGroup, {type UpdateGroupData} from "../../../../Hooks/Group/useUpdateGroup.ts";
import {notificationActions} from "../../../../store/slices/NotificationSlice.ts";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {useAppDispatch} from "../../../../store/storeHooks.ts";
import {useQueryClient} from "@tanstack/react-query";

export const Route = createFileRoute('/(protected)/groups/edit/$groupId')({
  component: RouteComponent,
})

function RouteComponent() {

    const dispatch = useAppDispatch();

    const queryClient = useQueryClient();

    const {groupId} = Route.useParams();

    const {data, isLoading, error} = useFetchGroupById(groupId);

    const {mutate, isPending} = useUpdateGroup(groupId);

    const handleGroupEdit = (data:UpdateGroupData) => {
        mutate(data, {
            onSuccess: () => {
                dispatch(notificationActions.setNotification({type: 'success', text: 'Group updated successfully'}));
                queryClient.invalidateQueries({queryKey: ['groups']});
                queryClient.invalidateQueries({queryKey: ['singleGroup', groupId]})
            },
            onError: (e) => {
                dispatch(notificationActions.setNotification({type: 'error', text: e.message}));
            }
        })
    }

    if (data && !error && !isLoading) return <EditGroup data={data?.data?.data ?? {}} isPending={isPending} handleGroupData={handleGroupEdit}/>
    if (error !== null && !isLoading) return <ErrorComponent error={error}/>
    if (isLoading) return <SettingsLoader/>
}
