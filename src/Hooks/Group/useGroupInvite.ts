import {useMutation} from "@tanstack/react-query";
import {GroupApi, type GroupInviteRequest} from "../../../APIs";
import {useMemo} from "react";

const useLGroupInvite = () => {

    const token = localStorage.getItem('token');

    const api = useMemo(() => new GroupApi(), []);

    return useMutation({
        mutationFn: async (inviteData:GroupInviteRequest) => {
            const response = await api.groupInvitePost(inviteData, {headers: {"Authorization": `Bearer ${token}`}});
            if (response.data.success === false) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        }
    })
}

export default useLGroupInvite;