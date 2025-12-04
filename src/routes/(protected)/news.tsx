import { createFileRoute } from '@tanstack/react-router'
import News from "../../Components/NewsComponents/News.tsx";

export const Route = createFileRoute('/(protected)/news')({
  component: RouteComponent,
})

function RouteComponent() {
  return  <News/>
}
