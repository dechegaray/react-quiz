import React from 'react';
import Question from './Question';
import PropTypes from 'prop-types';

const questionList = (props) => {
    const {questions, current, setCurrent, setScore} = props; 

    return (
        <ul className="question-wrapper">
            {
                questions.map(
                    question => {
                        if (question.id === current) {
                            return (
                                <Question
                                    {...question}
                                    key={question.id}
                                    current={current}
                                    setScore={setScore}
                                    setCurrent={setCurrent}
                                />
                            )
                        }
                        return false;
                    }
                )
            }
        </ul>
    );
}

export default questionList;

questionList.propTypes = {
    questions: PropTypes.array.isRequired,
    current: PropTypes.number.isRequired,
    setCurrent: PropTypes.func.isRequired,
    setScore: PropTypes.func.isRequired,
}