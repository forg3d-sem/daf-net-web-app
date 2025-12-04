import {PostApi} from "../../../APIs";
import {useMemo} from "react";
import {useQuery} from "@tanstack/react-query";

const useFetchPosts = (id:string) => {

    const postApi = useMemo(() => new PostApi(), []);

    const token = localStorage.getItem('token');

    return useQuery({
        queryKey: ['single-post', id],
        queryFn: async () => {
            const response = await postApi.getPostGet(id, {headers: {"Authorization": `Bearer ${token}`}} );
            if (!response.data.success) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        },
        refetchOnMount: 'always',
        gcTime: 0
    })
}

export default useFetchPosts;