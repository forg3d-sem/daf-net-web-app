import {createFileRoute} from '@tanstack/react-router'
import CreateCategoryPage from "../../../Components/CreateCategoryPage.tsx";

export const Route = createFileRoute('/(protected)/create-category/$groupId')({
    component: RouteComponent,
})

function RouteComponent() {

    const {groupId} = Route.useParams();

    return <CreateCategoryPage groupId={groupId}/>
}
