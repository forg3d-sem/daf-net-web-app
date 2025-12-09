import {useMemo} from "react";
import {useQuery} from "@tanstack/react-query";
import {SurveyApi} from "../../../APIs";

const useFetchSurveyResults = (id: string) => {

    const api = useMemo(() => new SurveyApi(), []);

    const token = localStorage.getItem('token');

    return useQuery({
        queryKey: ['survey-results', id],
        queryFn: async () => {
            const response = await api.surveyResultsGet(id, {headers: {"Authorization": `Bearer ${token}`}} );
            if (!response.data.success) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        },
        enabled: false
    })
}

export default useFetchSurveyResults;