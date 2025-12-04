import {PostApi} from "../../../APIs";
import {useMemo} from "react";
import {useQuery} from "@tanstack/react-query";

const useFetchPosts = () => {

    const postApi = useMemo(() => new PostApi(), []);

    const token = localStorage.getItem('token');

    return useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const response = await postApi.postAllGet({headers: {"Authorization": `Bearer ${token}`}} );
            if (!response.data.success) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        }
    })
}

export default useFetchPosts;