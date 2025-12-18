import {useMutation} from "@tanstack/react-query";
import {GroupApi, type GroupCreateRequest} from "../../../APIs";
import {useMemo} from "react";

const useLeaveGroup = () => {

    const token = localStorage.getItem('token');

    const api = useMemo(() => new GroupApi(), []);

    return useMutation({
        mutationFn: async (groupData:GroupCreateRequest) => {
            const response = await api.groupPost(groupData, {headers: {"Authorization": `Bearer ${token}`}});
            if (response.data.success === false) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        }
    })
}

export default useLeaveGroup;