import {useMemo} from "react";
import {useQuery} from "@tanstack/react-query";
import {OrganizationApi} from "../../../APIs";

const  useFetchOrganizations = () => {

    const api = useMemo(() => new OrganizationApi(), []);

    const token = localStorage.getItem('token');

    return useQuery({
        queryKey: ['organizations'],
        queryFn: async () => {
            const response = await api.organizationGet(1, 99, '', {headers: {"Authorization": `Bearer ${token}`}} );
            if (!response.data.success) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        }
    })
}

export default useFetchOrganizations;