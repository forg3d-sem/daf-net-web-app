import {useMemo} from "react";
import {useQuery} from "@tanstack/react-query";
import {ProfileApi} from "../../../APIs";

const useSearchProfile = (search: string) => {

    const api = useMemo(() => new ProfileApi(), []);

    const token = localStorage.getItem('token');

    return useQuery({
        queryKey: ['searchProfiles', search],
        queryFn: async () => {
            const response = await api.profileSearchPost({search: search, page: 1, pageSize: 99}, {headers: {"Authorization": `Bearer ${token}`}} );
            // if (!response.data.success) {
            //     console.log(response.data.error);
            //     throw new Error(response.data.error || 'Request failed');
            // }
            return response
        },
        staleTime: 0,
    })
}

export default useSearchProfile;