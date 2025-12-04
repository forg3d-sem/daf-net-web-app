import {useMutation} from "@tanstack/react-query";
import {useMemo} from "react";
import {type CreatePostRequest, PostApi} from "../../../APIs";

const useCreatePost = () => {

    const api = useMemo(() => new PostApi(), []);

    const token  = localStorage.getItem('token');

    return useMutation({
        mutationFn: async (postData:CreatePostRequest) => {
            const response = await api.postPost(postData, {headers: {"Authorization": `Bearer ${token}`}});
            if (!response.data.success) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        }
    })
}

export default useCreatePost;