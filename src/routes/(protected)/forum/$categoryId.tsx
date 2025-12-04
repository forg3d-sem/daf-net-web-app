import { createFileRoute } from '@tanstack/react-router'
import Forum from "../../../Components/ForumComponents/Forum.tsx";

export const Route = createFileRoute('/(protected)/forum/$categoryId')({
  component: RouteComponent,
})

function RouteComponent() {

    const {categoryId} = Route.useParams();

  return <Forum categoryId={categoryId} posts={[]} postsError={''} postsLoading={false}/>
}
