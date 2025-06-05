import React, { useState } from "react";
import type { QuestionType } from "../types/type";
import "./QuestionCard.css"
import { FaArrowAltCircleRight } from "react-icons/fa";

type Props = {
    question: QuestionType;
    currentIndex: number;
    totalQuestions: number;
    onAnswer: (answer: string) => void;
};

const QuestionCard: React.FC<Props> = ({
    question,
    currentIndex,
    totalQuestions,
    onAnswer,
}) => {
    const [selectedAnswer, setSelectedAnswer] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedAnswer(e.target.value);
    };
    const handlerNextBtn = () => {
        if (selectedAnswer) {
            setTimeout(() => {
                onAnswer(selectedAnswer)
                setSelectedAnswer("")
            }, 200)
        } else {
            alert("Please Select the option!")
        }
    }

    return (
        <>
            <div className="question-header">
                <div className="question-progress">
                    <span>Question</span>
                    <span className="current">{currentIndex + 1}</span>
                    <span className="divider">/</span>
                    <span className="total">{totalQuestions}</span>
                </div>
                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
                    ></div>
                </div>
            </div>

            <div className="question-card slide-in">
                <p className="question-text">Q{currentIndex + 1}:
                    {question.question}</p>

                <form className="options-form">
                    {question.options.map((option, index) => (
                        <label key={index} className="option">
                            <input
                                type="radio"
                                value={option}
                                checked={selectedAnswer === option}
                                onChange={handleChange}
                            />
                            {option}
                        </label>
                    ))}
                </form>
                <button className="next-btn" onClick={handlerNextBtn}>Next <FaArrowAltCircleRight /></button>
            </div>
        </>
    );
};

export default QuestionCard;
