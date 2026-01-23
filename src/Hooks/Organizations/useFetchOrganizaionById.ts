import {useMemo} from "react";
import {useQuery} from "@tanstack/react-query";
import {OrganizationApi} from "../../../APIs";

const  useFetchOrganizations = (id:string) => {

    const api = useMemo(() => new OrganizationApi(), []);

    const token = localStorage.getItem('token');

    return useQuery({
        queryKey: ['organization', id],
        queryFn: async () => {
            const response = await api.organizationByIdGet(id, {headers: {"Authorization": `Bearer ${token}`}} );
            if (!response.data.success) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        }
    })
}

export default useFetchOrganizations;