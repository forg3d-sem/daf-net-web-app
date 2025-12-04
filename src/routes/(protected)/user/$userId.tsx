import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(protected)/user/$userId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(protected)/user/$userId"!</div>
}
