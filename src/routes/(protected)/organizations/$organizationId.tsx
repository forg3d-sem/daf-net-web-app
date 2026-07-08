import { createFileRoute } from '@tanstack/react-router'
import OrganizationPage from "../../../Components/Organizations/OrganizationPage.tsx";
import useFetchOrganizations from "../../../Hooks/Organizations/useFetchOrganizaionById.ts";
import {type OrganizationResponse} from '../../../../APIs';

export const Route = createFileRoute(
  '/(protected)/organizations/$organizationId',
)({
  component: RouteComponent,
})

function RouteComponent() {
    const {organizationId} = Route.useParams();

    const {data, isFetching, error } = useFetchOrganizations(organizationId);
    console.log(data);

    return <OrganizationPage data={data?.data?.data as OrganizationResponse} isLoading={isFetching} error={error?.message ?? ''}/>
}
