import {createFileRoute} from '@tanstack/react-router'
import ProfileEdit from "../../../Components/SettingsComponents/ProfileComponents/ProfileEdit.tsx";
import {useMemo} from "react";
import useFetchProfile from "../../../Hooks/Profile/useFetchProfile.ts";
import SettingsLoader from "../../../Components/SettingsComponents/SettingsLoader.tsx";
import ErrorComponent from "../../../Components/SettingsComponents/ErrorComponent.tsx";

export const Route = createFileRoute('/(protected)/settings/profile-edit')({
    component: RouteComponent,
})

function RouteComponent() {

    const id = useMemo(() => localStorage.getItem('id') ?? '', []);

    const {isFetching, data, error, refetch} = useFetchProfile(id);

    if (isFetching) return <SettingsLoader/>

    if (data?.data.data) return <ProfileEdit data={data?.data.data}/>

    if (error) return <ErrorComponent message={error.message} refetch={refetch}/>
}
