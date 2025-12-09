import React from 'react';
import {nanoid} from "nanoid/non-secure";
import type {SurveyOptionResponse, SurveyOptionResultResponse} from '../../../../APIs';

interface SurveyOption {
    option: SurveyOptionResponse;
    selectedOptionId: string | null | undefined;
    handleOptionSelect: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>,id: string) => void;
    allOptionsWithCount: SurveyOptionResultResponse[];
}

const SurveyOption:React.FC<SurveyOption> = (props) => {

    const {option, selectedOptionId, handleOptionSelect} = props;

    const isSelected = props.option.optionId === props.selectedOptionId;

    const percentVote = props.allOptionsWithCount.find(o => o.optionId as string === option.optionId)?.percentage ?? 0;

    return (
        <li
            className={isSelected ? "option-item selected" : "option-item"}
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
                <div className={isSelected ? "option-votes selected-vote" : "option-votes"}>
                    {
                        `${percentVote}%`
                    }
                </div>
            </button>
        </li>
    );
};

export default SurveyOption;