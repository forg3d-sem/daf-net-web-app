import {PostApi} from "../../../APIs";
import {useMemo} from "react";
import {useQuery} from "@tanstack/react-query";

const useFetchPostsByUser = (page: number, userId:string) => {

    const postApi = useMemo(() => new PostApi(), []);

    const token = localStorage.getItem('token');

    return useQuery({
        queryKey: ['user-posts', userId],
        queryFn: async () => {
            const response = await postApi.postByUserGet(page, 99, userId, {headers: {"Authorization": `Bearer ${token}`}} );
            if (!response.data.success) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        }
    })
}

export default useFetchPostsByUser;