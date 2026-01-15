import React from 'react';
import {nanoid} from "nanoid/non-secure";
import type {SurveyOptionResponse, SurveyOptionResultResponse} from '../../../../APIs';

interface SurveyOption {
    option: SurveyOptionResponse;
    selectedOptionId: string | null | undefined;
    handleOptionSelect: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>,id: string) => void;
    allOptionsWithCount: SurveyOptionResultResponse[];
    preselectedVal: string | null;
}

const SurveyOption:React.FC<SurveyOption> = (props) => {

    const {option, selectedOptionId, handleOptionSelect, preselectedVal} = props;

    const getOptionClass = () => {
        if (selectedOptionId) {
            return "option-item selected"
        }
        if (!selectedOptionId && preselectedVal === option.optionId) {
            return "option-item pre-selected"
        }
        return "option-item"
    }

    const isSelected = option.optionId === selectedOptionId || preselectedVal === option.optionId;

    const percentVote = props.allOptionsWithCount.find(o => o.optionId as string === option.optionId)?.percentage ?? 0;

    return (
        <li
            className={getOptionClass()}
            key={nanoid()}

        >
            <button
                className='option-item-button'
                disabled={!!selectedOptionId}
                onClick={(e) => handleOptionSelect(e, option.optionId ?? '')}
            >
                <div
                    className={"option-radio"}
                >
                    <div
                        className={isSelected ? "fake-radio selected-vote" : "fake-radio"}
                    >
                        {
                            isSelected &&
                            <div className="fake-radio-inner"></div>
                        }
                    </div>
                    <label className={isSelected ? 'selected-label' : ''} htmlFor={`option-${option.optionId}`}>
                        {option.text}
                    </label>
                </div>
                {
                    selectedOptionId
                    &&
                    <div className={isSelected ? "option-votes selected-vote" : "option-votes"}>
                        {
                            `${percentVote}%`
                        }
                    </div>
                }
            </button>
        </li>
    );
};

export default SurveyOption;