import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(protected)/news')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(protected)/news"!</div>
}
