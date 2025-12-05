import {useMutation} from "@tanstack/react-query";
import {AuthApi} from "../../../APIs";
import {useMemo} from "react";

type PasswordGroup = {
    oldPassword: string,
    newPassword: string
}

const useChangePassword = () => {

    const api = useMemo(() => new AuthApi(), []);

    const token = localStorage.getItem('token');

    return useMutation({
        mutationFn: async (passwordGroup:PasswordGroup) => {
            const response = await api.changePasswordPost(passwordGroup, {headers: {"Authorization": `Bearer ${token}`}});
            if (response.data.success === false) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        }
    })
}

export default useChangePassword;