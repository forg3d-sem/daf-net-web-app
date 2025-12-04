import { createFileRoute } from '@tanstack/react-router'
import PostPage from "../../../Components/ForumComponents/PostPage.tsx";

export const Route = createFileRoute('/(protected)/post/$postId')({
  component: RouteComponent,
})

function RouteComponent() {

    const {postId} = Route.useParams();

  return <PostPage id={postId}/>
}
