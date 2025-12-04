import {useMemo} from "react";
import {CategoryApi} from "../../../APIs";
import {useQuery} from "@tanstack/react-query";

const  useFetchCategories = (groupId: string, search:string, page = 1,) => {

    const catApi = useMemo(() => new CategoryApi(), []);

    const token = localStorage.getItem('token');

    return useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const response = await catApi.categoryGet(groupId, page, 10, search, {headers: {"Authorization": `Bearer ${token}`}} );
            if (!response.data.success) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        }
    })
}

export default useFetchCategories;