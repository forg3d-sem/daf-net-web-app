import {useMutation} from "@tanstack/react-query";
import {AttachmentApi} from "../../../APIs";
import {useMemo} from "react";


const useAddAttachment = () => {

    const api = useMemo(() => new AttachmentApi(), []);

    const token = localStorage.getItem('token');

    return useMutation({
        mutationFn: async (attachment:File | undefined)=> {
            const response = await api.attachmentPost(attachment, {headers: {"Authorization": `Bearer ${token}`}});
            if (response.data.success === false) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        }
    })
}

export default useAddAttachment;