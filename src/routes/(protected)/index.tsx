import { createFileRoute } from '@tanstack/react-router'
import Forum from "../../Components/ForumComponents/Forum.tsx";
// import useFetchGroups from "../../Hooks/Group/useFetchGroups.ts";
// import useAddCategory from "../../Hooks/Categories/useAddCategory.ts";
import useFetchAllPosts from "../../Hooks/Posts/useFetchAllPosts.ts";
import {useEffect, useMemo} from "react";
import useFetchProfile from "../../Hooks/Profile/useFetchProfile.ts";

export const Route = createFileRoute('/(protected)/')({
  component: RouteComponent,
})

function RouteComponent() {

    // const {data, isFetching} = useFetchGroups();

    const {data, isLoading, error} = useFetchAllPosts();

    const id = useMemo(() => localStorage.getItem('id') ?? '', []);

    const {data:profileData, isFetching:isFetchingProfile, error:profileError} = useFetchProfile(id);

    const {postId} = Route.useParams();

    console.log(data)

  return <Forum posts={data?.data?.data ?? []} postsLoading={isLoading} postsError={error}/>
}
