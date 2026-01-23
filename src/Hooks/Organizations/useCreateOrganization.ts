import {useMutation} from "@tanstack/react-query";
import {useMemo} from "react";
import {type OrganizationCreateRequest, OrganizationApi} from "../../../APIs";

const useCreateOrganization = () => {

    const api = useMemo(() => new OrganizationApi(), []);

    const token  = localStorage.getItem('token');

    return useMutation({
        mutationFn: async (data:OrganizationCreateRequest) => {
            const response = await api.organizationPost(data, {headers: {"Authorization": `Bearer ${token}`}});
            if (!response.data.success) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        }
    })
}

export default useCreateOrganization;