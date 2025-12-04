import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(protected)/settings/groups')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='d-flex justify-content-center align-items-center fw-bold'>Work in progress. Stay tuned for updates!</div>
}
