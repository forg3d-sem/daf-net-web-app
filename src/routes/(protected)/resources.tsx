import { createFileRoute } from '@tanstack/react-router'
import Resources from "../../Components/ResourcesComponents/Resources.tsx";

export const Route = createFileRoute('/(protected)/resources')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Resources/>
}
