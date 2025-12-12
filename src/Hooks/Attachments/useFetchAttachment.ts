import {useMemo} from "react";
import {AttachmentApi} from "../../../APIs";
import {useQuery} from "@tanstack/react-query";

const  useFetchAttachment = (attachmentId: string) => {

    const catApi = useMemo(() => new AttachmentApi(), []);

    const token = localStorage.getItem('token');

    return useQuery({
        queryKey: ['attachment', attachmentId],
        queryFn: async () => {
            const response = await catApi.attachmentAttachmentIdGet(attachmentId, {headers: {"Authorization": `Bearer ${token}`}} );
            if (!response.data.success) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        }
    })
}

export default useFetchAttachment;