import {useMutation} from "@tanstack/react-query";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {GroupApi, type GroupUpdateRequest} from "../../../APIs/api.ts";
import {useMemo} from "react";

export type UpdateGroupData = Omit<GroupUpdateRequest, "groupId">;

const useUpdateGroup = (id:string) => {

    const token = localStorage.getItem('token');

    const api = useMemo(() => new GroupApi(), []);

    return useMutation({
        mutationFn: async (updateData:UpdateGroupData) => {

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