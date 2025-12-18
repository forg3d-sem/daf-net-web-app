import {useMutation} from "@tanstack/react-query";
import {GroupApi, type GroupUpdateRequest} from "../../../APIs";
import {useMemo} from "react";

const useUpdateGroup = (id:string) => {

    const token = localStorage.getItem('token');

    const api = useMemo(() => new GroupApi(), []);

    return useMutation({
        mutationFn: async (updateData:GroupUpdateRequest) => {
            const response = await api.groupPut({...updateData, groupId: id}, {headers: {"Authorization": `Bearer ${token}`}});
            if (response.data.success === false) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        }
    })
}

export default useUpdateGroup;