import {useMutation} from "@tanstack/react-query";
import {GroupApi, type GroupKickRequest} from "../../../APIs";
import {useMemo} from "react";

const useKickUser = () => {

    const token = localStorage.getItem('token');

    const api = useMemo(() => new GroupApi(), []);

    return useMutation({
        mutationFn: async (kickData:GroupKickRequest) => {
            const response = await api.groupKickPost(kickData, {headers: {"Authorization": `Bearer ${token}`}});
            if (response.data.success === false) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        }
    })
}

export default useKickUser;