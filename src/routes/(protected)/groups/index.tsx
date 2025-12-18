import { createFileRoute } from '@tanstack/react-router'
import GroupsPage from "../../../Components/GroupComponents/GroupsPage.tsx";
import ErrorComponent from "../../../Components/ErrorComponent.tsx";
import SettingsLoader from "../../../Components/SettingsComponents/SettingsLoader.tsx";
import useFetchGroups from "../../../Hooks/Group/useFetchGroups.ts";

export const Route = createFileRoute('/(protected)/groups/')({
  component: RouteComponent,
})

function RouteComponent() {

    const {data, isLoading, error} = useFetchGroups()
    console.log(data);

    if (data && !error && !isLoading) return <GroupsPage data={data?.data?.data?.groups ?? []}/>
    if (error !== null && !isLoading) return <ErrorComponent error={error}/>
    if (isLoading) return <SettingsLoader/>
}
