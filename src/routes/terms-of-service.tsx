import { createFileRoute } from '@tanstack/react-router'
import {ToSContent} from "../Components/Legal/ToSContent.tsx";

export const Route = createFileRoute('/terms-of-service')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ToSContent/>
}
