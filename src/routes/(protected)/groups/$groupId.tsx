import { createFileRoute } from '@tanstack/react-router'
import SingleGroupPage from "../../../Components/GroupComponents/SingleGroupPage.tsx";
import '../../../Components/ForumComponents/ForumPostPage/postStyles.scss';
import useFetchGroupById from "../../../Hooks/Group/useFetchGroupById.ts";
import ErrorComponent from "../../../Components/ErrorComponent.tsx";
import SettingsLoader from "../../../Components/SettingsComponents/SettingsLoader.tsx";

export const Route = createFileRoute('/(protected)/groups/$groupId')({
  component: RouteComponent,
})

function RouteComponent() {

    const {groupId} = Route.useParams();

    const {data, isLoading, error} = useFetchGroupById(groupId);


    if (data && !error && !isLoading) return <SingleGroupPage data={data?.data?.data ?? {}}/>
    if (error !== null && !isLoading) return <ErrorComponent error={error}/>
    if (isLoading) return <SettingsLoader/>
}
