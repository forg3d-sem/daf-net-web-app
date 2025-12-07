import { createFileRoute } from '@tanstack/react-router'
import PostPage from "../../../Components/ForumComponents/PostPage.tsx";
import useGetPost from "../../../Hooks/Posts/useGetPost.ts";
import type {PostResponse} from "../../../../APIs";


export const Route = createFileRoute('/(protected)/post/$postId')({
  component: RouteComponent,
})

function RouteComponent() {

    const {postId} = Route.useParams();

    const {data, isFetching, error, refetch} = useGetPost(postId);

    const refetchData = () => {
        refetch();
    }

  return <PostPage data={data?.data?.data as PostResponse} isLoading={isFetching} error={error?.message ?? ''} refetch={refetchData}/>
}
