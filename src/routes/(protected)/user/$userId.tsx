import { createFileRoute } from '@tanstack/react-router'
import UserPage from "../../../Components/UserProfile/UserPage.tsx";
import useFetchProfile from "../../../Hooks/Profile/useFetchProfile.ts";

export const Route = createFileRoute('/(protected)/user/$userId')({
  component: RouteComponent,
})

function RouteComponent() {

    const {userId} = Route.useParams();

    const {isFetching:fetchingProfile, data:profile, error:profileError} = useFetchProfile(userId);

  return <UserPage userData={profile?.data?.data} isLoadingProfile={fetchingProfile} profileError={profileError?.message}/>
}
