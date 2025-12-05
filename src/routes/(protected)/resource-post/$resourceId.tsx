import { createFileRoute } from '@tanstack/react-router'
import useGetPost from "../../../Hooks/Posts/useGetPost.ts";
import ResourcePage from "../../../Components/ResourcesComponents/ResourcePage.tsx";
import type {PostResponse} from "../../../../APIs";

export const Route = createFileRoute('/(protected)/resource-post/$resourceId')({
  component: RouteComponent,
})

function RouteComponent() {

    const {resourceId} = Route.useParams();

    const {data, isFetching, error } = useGetPost(resourceId);

  return <ResourcePage data={data?.data?.data as PostResponse} isLoading={isFetching} error={error?.message ?? ''}/>
}
