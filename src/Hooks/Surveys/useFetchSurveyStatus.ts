import {useMemo} from "react";
import {useQuery} from "@tanstack/react-query";
import {SurveyApi} from "../../../APIs";

const useFetchSurveyStatus = (id: string) => {

    const api = useMemo(() => new SurveyApi(), []);

    const token = localStorage.getItem('token');

    return useQuery({
        queryKey: ['survey', id],
        queryFn: async () => {
            const response = await api.surveyStatusGet(id, {headers: {"Authorization": `Bearer ${token}`}} );
            if (!response.data.success) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        },
    })
}

export default useFetchSurveyStatus;