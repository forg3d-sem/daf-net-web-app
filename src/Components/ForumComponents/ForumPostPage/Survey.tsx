import React, {useEffect, useState} from 'react';
import useFetchSurveyStatus from "../../../Hooks/Surveys/useFetchSurveyStatus.ts";
import {nanoid} from "nanoid/non-secure";
import useVoteSurvey from "../../../Hooks/Surveys/useVoteSurvey.ts";
import useFetchSurveyResults from "../../../Hooks/Surveys/useFetchSurveyResults.ts";
import SurveyOption from "./SurveyOption.tsx";
import {useQueryClient} from "@tanstack/react-query";
import {useAppDispatch} from "../../../store/storeHooks.ts";
import {notificationActions} from "../../../store/slices/NotificationSlice.ts";
import {Spinner} from "react-bootstrap";

interface Survey {
    id: string;
}

const Survey: React.FC<Survey> = ({id}) => {

    const [preselectVal, setPreselectVal] = useState<string | null>(null)

    //add loading handling, error
    const {data: statusData} = useFetchSurveyStatus(id);

    //add loading handling, error
    const {data: resultsData, refetch} = useFetchSurveyResults(id);

    //add loading handling
    const {mutate, isPending} = useVoteSurvey();

    const queryProvider = useQueryClient();
    const dispatch = useAppDispatch();

    const handleOptionSelect = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
        e.stopPropagation();
        e.preventDefault();

        setPreselectVal(id);
    }

    const handleVote = () => {
        if (statusData?.data?.data?.hasVoted) {
            return;
        }

        if (!preselectVal) {
            return;
        }

        const surveyId = statusData?.data?.data?.surveyId ?? '';

        mutate({surveyId: surveyId, surveyOptionId: preselectVal}, {
            onSuccess: () => {
                queryProvider.invalidateQueries({queryKey: ['survey', surveyId]});
                queryProvider.invalidateQueries({queryKey: ['survey-results', surveyId]});
                refetch();
            },
            onError: (e) => {
                dispatch(notificationActions.setNotification({type: "error", text: e.message}))
            }
        })
    }

    useEffect(() => {
        if (statusData?.data?.data?.hasVoted === true) {
            refetch()
        }
    }, [statusData?.data?.data?.hasVoted, refetch]);


    if (statusData) return (
        <>
            <ul className="survey-list">
                {
                    statusData?.data?.data?.options?.map(option =>
                        <SurveyOption
                            key={nanoid()}
                            option={option}
                            selectedOptionId={statusData?.data?.data?.votedOptionId}
                            handleOptionSelect={handleOptionSelect}
                            allOptionsWithCount={resultsData?.data?.data?.options ?? []}
                            preselectedVal={preselectVal}
                        />
                    )
                }
            </ul>
            {
                (preselectVal && !statusData?.data?.data?.votedOptionId)  &&
                <div className="survey-btn-wrap">
                    <button
                        onClick={handleVote}
                    >
                        {
                            isPending
                            ?
                                <Spinner animation='border'/>
                                :
                                "Vote"
                        }
                    </button>
                </div>
            }

        </>

    );
};

export default Survey;