import {createFileRoute} from '@tanstack/react-router'
import AuthBase from "../Components/AuthComponents/AuthBase.tsx";
import VerifyEmail from "../Components/AuthComponents/VerifyEmail.tsx";

export const Route = createFileRoute('/verify-email')({
    component: RouteComponent,
})

function RouteComponent() {

    const {email}:{email:string} = Route.useSearch()

    return <AuthBase>
        <VerifyEmail email={email}/>
    </AuthBase>
}
