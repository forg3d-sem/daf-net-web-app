import {useMutation} from "@tanstack/react-query";
import {CategoryApi} from "../../../APIs";
import {useMemo} from "react";

const useAddCategory = (groupId:string) => {

    const api = useMemo(() => new CategoryApi(), []);

    const token = localStorage.getItem('token');

    return useMutation({
        mutationFn: async (name: string) => {
            const response = await api.categoryPost({categoryName: name, groupId: groupId}, {headers: {"Authorization": `Bearer ${token}`}});
            if (!response.data.success) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        }
    })
}

export default useAddCategory;