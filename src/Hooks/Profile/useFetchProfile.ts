import {useMemo} from "react";
import {useQuery} from "@tanstack/react-query";
import {ProfileApi} from "../../../APIs";

const useFetchProfile = (id: string) => {

    const api = useMemo(() => new ProfileApi(), []);

    const token = localStorage.getItem('token');

    return useQuery({
        queryKey: ['profile', id],
        queryFn: async () => {
            const response = await api.profileUserIdGet(id, {headers: {"Authorization": `Bearer ${token}`}} );
            if (!response.data.success) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        },
    })
}

export default useFetchProfile;