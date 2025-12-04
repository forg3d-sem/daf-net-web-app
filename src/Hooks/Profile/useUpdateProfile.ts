import {useMutation} from "@tanstack/react-query";
import {ProfileApi} from "../../../APIs";
import {useMemo} from "react";

type ProfileData ={
    imageUrl?: string,
    username?: string,
    firstName?: string,
    lastName?: string,
    about?: string
}

const useUpdateProfile = () => {

    const api = useMemo(() => new ProfileApi(), []);

    const token = localStorage.getItem('token');

    return useMutation({
        mutationFn: async (data: ProfileData) => {
            const response = await api.profilePost(data, {headers: {"Authorization": `Bearer ${token}`}});
            if (!response.data.success) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        }
    })
}

export default useUpdateProfile;