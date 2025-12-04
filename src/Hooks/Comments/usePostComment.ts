import {useMutation} from "@tanstack/react-query";
import {useMemo} from "react";
import {CommentApi, type CreateCommentRequest} from "../../../APIs";

const usePostComment = () => {

    const api = useMemo(() => new CommentApi(), []);

    const token  = localStorage.getItem('token');

    return useMutation({
        mutationFn: async (commentData:CreateCommentRequest) => {
            const response = await api.commentPost(commentData, {headers: {"Authorization": `Bearer ${token}`}});
            if (!response.data.success) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        }
    })
}

export default usePostComment;