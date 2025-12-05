import { createFileRoute } from '@tanstack/react-router'
import Resources from "../../Components/ResourcesComponents/Resources.tsx";
import useFetchPosts from "../../Hooks/Posts/useFetchPosts.ts";

export const Route = createFileRoute('/(protected)/resources')({
  component: RouteComponent,
})

function RouteComponent() {

    const resId = "22222222-0000-0000-0000-000000000001";
    const {data, isPending, error, refetch }= useFetchPosts(1, resId);

    const refetchData = () => {
        refetch();
    }

  return <Resources data={data?.data?.data?.posts ?? []} isLoading={isPending} error={error?.message} refetch={refetchData} />
}
