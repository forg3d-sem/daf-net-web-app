import { createFileRoute } from '@tanstack/react-router'
import useFetchOrganizations from "../../../Hooks/Organizations/useFetchOgranizations.ts";
import Organizations from "../../../Components/Organizations/Organizations.tsx";
import ErrorComponent from "../../../Components/ErrorComponent.tsx";
import SettingsLoader from "../../../Components/SettingsComponents/SettingsLoader.tsx";

export const Route = createFileRoute('/(protected)/organizations/')({
  component: RouteComponent,
})

function RouteComponent() {

    const {data, isLoading, error} = useFetchOrganizations();

    if (data && !error && !isLoading) return <Organizations data={data?.data?.data?.organizations ?? []}/>
    if (error !== null && !isLoading) return <ErrorComponent error={error}/>
    if (isLoading) return <SettingsLoader/>
}
