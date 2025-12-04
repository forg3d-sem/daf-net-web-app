import {useMutation} from "@tanstack/react-query";
import {AuthApi} from "../../APIs";
import {useMemo} from "react";

type Credentials = {
    email: string,
    password: string
}

const useLogin = () => {

    const api = useMemo(() => new AuthApi(), []);

    return useMutation({
        mutationFn: async (credentials:Credentials) => {
            const response = await api.loginPost(credentials);
            if (!response.data.success) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        }
    })
}

export default useLogin;