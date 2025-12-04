import { createFileRoute } from '@tanstack/react-router'
import AuthBase from "../Components/AuthComponents/AuthBase.tsx";
import Registration from "../Components/AuthComponents/Registration.tsx";

export const Route = createFileRoute('/registration')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AuthBase>
      <Registration/>
  </AuthBase>
}
