import {createFileRoute} from '@tanstack/react-router'
import AuthBase from "../Components/AuthComponents/AuthBase.tsx";
import Login from "../Components/AuthComponents/Login.tsx";


export const Route = createFileRoute('/login')({
    component: RouteComponent,
})

function RouteComponent() {
    return <AuthBase>
        <Login/>
    </AuthBase>
}
