import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/_auth')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/(auth)/_auth"!
      <Outlet />
    </div>
  )
}
