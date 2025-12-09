import { createFileRoute } from '@tanstack/react-router'
import Forum from "../../Components/ForumComponents/Forum.tsx";
// import useFetchGroups from "../../Hooks/Group/useFetchGroups.ts";
// import useAddCategory from "../../Hooks/Categories/useAddCategory.ts";
import useFetchAllPosts from "../../Hooks/Posts/useFetchAllPosts.ts";
// import {useMemo} from "react";
// import useFetchProfile from "../../Hooks/Profile/useFetchProfile.ts";

export const Route = createFileRoute('/(protected)/')({
  component: RouteComponent,
})

function RouteComponent() {

    const {data, isLoading, error, refetch} = useFetchAllPosts();

    const refetchData = () => {
        refetch();
    }

  return <Forum posts={data?.data?.data?.posts?? []} postsLoading={isLoading} postsError={error?.message ?? ''} refetch={refetchData}/>
}
