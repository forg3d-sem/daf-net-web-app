import {useMutation} from "@tanstack/react-query";
import {AuthApi} from "../../../APIs";
import {useMemo} from "react";

type RegistrationData = {
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    password: string
}

const useRegister = () => {

    const authApi = useMemo(() => new AuthApi(), []);

    return useMutation({
        mutationFn: async (registrationData:RegistrationData) => {
            const response = await authApi.registerPost(registrationData);
            if (!response.data.success) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        }
    })
}

export default useRegister;