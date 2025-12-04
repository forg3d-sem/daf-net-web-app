import {useMemo} from "react";
import {useQuery} from "@tanstack/react-query";
import {CommentApi} from "../../../APIs";

const useFetchComments = (id:string) => {

    const postApi = useMemo(() => new CommentApi(), []);

    const token = localStorage.getItem('token');

    return useQuery({
        queryKey: ['comments', id],
        queryFn: async () => {
            const response = await postApi.commentGet(id, {headers: {"Authorization": `Bearer ${token}`}} );
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

export default useFetchComments;