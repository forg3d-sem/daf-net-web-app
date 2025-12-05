import { createFileRoute } from '@tanstack/react-router'
import Forum from "../../../Components/ForumComponents/Forum.tsx";
import useFetchPosts from "../../../Hooks/Posts/useFetchPosts.ts";

export const Route = createFileRoute('/(protected)/forum/$categoryId')({
  component: RouteComponent,
})

function RouteComponent() {

    const {categoryId} = Route.useParams();

    const {data, isLoading, error, refetch} = useFetchPosts(1, categoryId);

    const refetchData = () => {
        refetch();
    }

  return <Forum posts={data?.data?.data?.posts ?? []} postsError={error?.message ?? ''} postsLoading={isLoading} refetch={refetchData}/>
}
