import {useMemo} from "react";
import {useQuery} from "@tanstack/react-query";
import {GroupApi} from "../../../APIs";

const  useFetchGroupMembers = (groupId:string) => {

    const api = useMemo(() => new GroupApi(), []);

    const token = localStorage.getItem('token');

    return useQuery({
        queryKey: ['groupMembers', groupId],
        queryFn: async () => {
            const response = await api.groupMembersGet(groupId,1, 99, '', {headers: {"Authorization": `Bearer ${token}`}} );
            if (!response.data.success) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        }
    })
}

export default useFetchGroupMembers;