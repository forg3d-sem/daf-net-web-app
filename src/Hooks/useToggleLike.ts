import {useMutation} from "@tanstack/react-query";
import {useMemo} from "react";
import {LikeApi} from '../../APIs'

const useToggleLike = () => {

    const api = useMemo(() => new LikeApi(), []);

    const token  = localStorage.getItem('token');

    return useMutation({
        mutationFn: async (id: string) => {
            const response = await api.likeTogglePost({postId: id}, {headers: {"Authorization": `Bearer ${token}`}});
            if (!response.data.success) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        }
    })
}

export default useToggleLike;