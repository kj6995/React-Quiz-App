import React from 'react'

function Questionaire({handleAnswer,showAnswers,handleNextQuestion, data:{question, correct_answer, answers}}) {
    return (
        <>
            <div className="questionClass">
                <h1 dangerouslySetInnerHTML={{__html:question}} />
            </div>
            <div className="button-overall">
                {answers.map((answer,idx) => {
                    const specialClassName = showAnswers ? (
                        answer === correct_answer ? "green-button": "red-button"
                    ) : "";
                    return(
                        <button className={`normal-button ${specialClassName}`} 
                        onClick = {() => handleAnswer(answer)}
                        dangerouslySetInnerHTML={{__html:answer}} />

                    )
                })}
            </div>
            {showAnswers && (
                <button onClick = {handleNextQuestion} className="next-question">Next Question</button>
            )}
        </>
    )
}

export default Questionaire
