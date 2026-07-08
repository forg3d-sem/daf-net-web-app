import {PostApi} from "../../../APIs";
import {useMemo} from "react";
import {useQuery} from "@tanstack/react-query";

const useFetchPosts = (groupId:string | undefined) => {

    const postApi = useMemo(() => new PostApi(), []);

    const token = localStorage.getItem('token');

    return useQuery({
        queryKey: ['allPosts', groupId],
        queryFn: async () => {
            const response = await postApi.postAllGet(groupId,1, 99, {headers: {"Authorization": `Bearer ${token}`}} );
            if (!response.data.success) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        },
        staleTime: 0
    })
}

export default useFetchPosts;