import {TagsApi} from "../../../APIs";
import {useMemo} from "react";
import {useQuery} from "@tanstack/react-query";

const useFetchTags = (val: string) => {

    const tagsApi = useMemo(() => new TagsApi(), []);

    const token = localStorage.getItem('token');

    return useQuery({
        queryKey: ['tags'],
        queryFn: async () => {
            const response = await tagsApi.tagsKnownTagsGet(val, 5, {headers: {"Authorization": `Bearer ${token}`}} );
            if (!response.data.success) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        },
        enabled: false,
        staleTime: 0,
    })
}

export default useFetchTags;