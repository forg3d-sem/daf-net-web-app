import {useMutation} from "@tanstack/react-query";
import {SurveyApi} from "../../../APIs";
import {useMemo} from "react";

type SurveyVoteData = {
    surveyId: string,
    surveyOptionId: string;
}

const useVoteSurvey = () => {

    const api = useMemo(() => new SurveyApi(), []);

    const token = localStorage.getItem('token');

    return useMutation({
        mutationFn: async (data: SurveyVoteData) => {
            const response = await api.surveyVotePost(data, {headers: {"Authorization": `Bearer ${token}`}});
            if (!response.data.success) {
                console.log(response.data.error);
                throw new Error(response.data.error || 'Request failed');
            }
            return response
        }
    })
}

export default useVoteSurvey;