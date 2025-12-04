import { createFileRoute } from '@tanstack/react-router'
import PasswordReset from "../../../Components/SettingsComponents/PasswordReset.tsx";

export const Route = createFileRoute('/(protected)/settings/password-reset')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PasswordReset/>
}
