import {useMutation} from "@tanstack/react-query";
import {AuthApi} from "../../APIs";
import {useMemo} from "react";

type ConfirmationObj = {
    email: string,
    confirmationCode: string
}

const useVerifyEmail = () => {

    const authApi = useMemo(() => new AuthApi(), []);

    return useMutation({
        mutationFn: async (confirmationData:ConfirmationObj) => {
            const response = await authApi.confirmPost(confirmationData)
            if (!response.data.success) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        }
    })
}

export default useVerifyEmail;