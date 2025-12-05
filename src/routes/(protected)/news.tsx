import { createFileRoute } from '@tanstack/react-router'
import News from "../../Components/NewsComponents/News.tsx";
import useFetchPosts from "../../Hooks/Posts/useFetchPosts.ts";
import '../../Components/NewsComponents/newsStyles.scss';

export const Route = createFileRoute('/(protected)/news')({
  component: RouteComponent,
})

function RouteComponent() {
    const newsId = "11111111-0000-0000-0000-000000000001";
    const {data, isPending, error, refetch }= useFetchPosts(1, newsId);

    const refetchData = () => {
        refetch();
    }

  return  <News data={data?.data?.data?.posts ?? []} isLoading={isPending} error={error?.message ?? ''} refetch={refetchData}/>
}
