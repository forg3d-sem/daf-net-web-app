import { createFileRoute } from '@tanstack/react-router'
import useFetchGroupById from "../../../../Hooks/Group/useFetchGroupById.ts";
import ErrorComponent from "../../../../Components/ErrorComponent.tsx";
import SettingsLoader from "../../../../Components/SettingsComponents/SettingsLoader.tsx";
import MyGroupPage from "../../../../Components/GroupComponents/MyGroupPage.tsx";

export const Route = createFileRoute('/(protected)/groups/my/$groupId')({
  component: RouteComponent,
})

function RouteComponent() {

    const {groupId} = Route.useParams();

    const {data, isLoading, error} = useFetchGroupById(groupId);

    if (data && !error && !isLoading) return <MyGroupPage data={data?.data?.data ?? {}}/>
    if (error !== null && !isLoading) return <ErrorComponent error={error}/>
    if (isLoading) return <SettingsLoader/>
}
