import {useMutation} from "@tanstack/react-query";
import {AttachmentApi} from "../../../APIs";
import {useMemo} from "react";


const useDeleteAttachment = () => {

    const api = useMemo(() => new AttachmentApi(), []);

    const token = localStorage.getItem('token');

    return useMutation({
        mutationFn: async (attachmentId:string)=> {
            const response = await api.attachmentDelete(attachmentId, {headers: {"Authorization": `Bearer ${token}`}});
            if (response.data.success === false) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        }
    })
}

export default useDeleteAttachment;