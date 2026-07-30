import { createFileRoute } from '@tanstack/react-router'
import {PrivacyPolicyContent} from "../Components/Legal/PrivacyPolicyContent.tsx";

export const Route = createFileRoute('/privacy-policy')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PrivacyPolicyContent/>
}
