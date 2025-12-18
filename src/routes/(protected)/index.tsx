import { createFileRoute } from '@tanstack/react-router'
import Forum from "../../Components/ForumComponents/Forum.tsx";
import useFetchAllPosts from "../../Hooks/Posts/useFetchAllPosts.ts";

export const Route = createFileRoute('/(protected)/')({
  component: RouteComponent,
})

function RouteComponent() {

    const {data, isLoading, error, refetch} = useFetchAllPosts(undefined);

    const refetchData = () => {
        refetch();
    }

  return <Forum posts={data?.data?.data?.posts?? []} postsLoading={isLoading} postsError={error?.message ?? ''} refetch={refetchData}/>
}
