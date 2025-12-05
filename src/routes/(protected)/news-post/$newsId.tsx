import { createFileRoute } from '@tanstack/react-router'
import useGetPost from "../../../Hooks/Posts/useGetPost.ts";
import NewsPage from "../../../Components/NewsComponents/NewsPage.tsx";
import type {PostResponse} from "../../../../APIs";

export const Route = createFileRoute('/(protected)/news-post/$newsId')({
  component: RouteComponent,
})

function RouteComponent() {

    const {newsId} = Route.useParams();

    const {data, isFetching, error } = useGetPost(newsId);

  return <NewsPage data={data?.data?.data as PostResponse} isLoading={isFetching} error={error?.message ?? ''}/>
}
