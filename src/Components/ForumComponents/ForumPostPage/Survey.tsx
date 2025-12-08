import React from 'react';
import useFetchSurveyStatus from "../../../Hooks/Surveys/useFetchSurveyStatus.ts";
import {nanoid} from "nanoid/non-secure";
import useVoteSurvey from "../../../Hooks/Surveys/useVoteSurvey.ts";
import useFetchSurveyResults from "../../../Hooks/Surveys/useFetchSurveyResults.ts";
import SurveyOption from "./SurveyOption.tsx";
import {useQueryClient} from "@tanstack/react-query";
import {useAppDispatch} from "../../../store/storeHooks.ts";
import {notificationActions} from "../../../store/slices/NotificationSlice.ts";

interface Survey {
    id: string;
}

const Survey: React.FC<Survey> = ({id}) => {

    //add loading handling, error
    const {data: statusData} = useFetchSurveyStatus(id);

    //add loading handling, error
    const {data: resultsData} = useFetchSurveyResults(id);

    //add loading handling
    const {mutate} = useVoteSurvey();

    const queryProvider = useQueryClient();
    const dispatch = useAppDispatch()

    const handleOptionSelect = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>,id: string) => {
        e.stopPropagation();
        e.preventDefault();
        if (statusData?.data?.data?.hasVoted) {
            return;
        }

        const surveyId = statusData?.data?.data?.surveyId ?? '';

        mutate({surveyId: surveyId, surveyOptionId: id}, {
            onSuccess: () => {
                queryProvider.invalidateQueries({queryKey: ['survey', 'survey-results', 'allPosts', id]})
            },
            onError: (e ) => {
                dispatch(notificationActions.setNotification({type: "error", text: e.message}))
            }
        })
    }


    if (statusData) return (
        <ul className="survey-list">
            {
                statusData?.data?.data?.options?.map(option =>
                    <SurveyOption
                        key={nanoid()}
                        option={option}
                        selectedOptionId={statusData?.data?.data?.votedOptionId}
                        handleOptionSelect={handleOptionSelect}
                        allOptionsWithCount={resultsData?.data?.data?.options ?? []}
                    />
                )
            }
        </ul>
    );
};

export default Survey;