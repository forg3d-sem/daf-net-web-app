import { createFileRoute } from '@tanstack/react-router'
import PostPage from "../../../Components/ForumComponents/PostPage.tsx";
import useGetPost from "../../../Hooks/Posts/useGetPost.ts";
import type {PostResponse} from "../../../../API_backup";


export const Route = createFileRoute('/(protected)/post/$postId')({
  component: RouteComponent,
})

function RouteComponent() {

    const {postId} = Route.useParams();

    const {data, isFetching, error } = useGetPost(postId);

  return <PostPage data={data?.data?.data as PostResponse} isLoading={isFetching} error={error?.message ?? ''}/>
}
