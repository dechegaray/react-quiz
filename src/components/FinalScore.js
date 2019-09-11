import React from 'react';
import PropTypes from 'prop-types';

const finalScore = (props) => {
    const {score, totalQuestions} = props;
    const approvedQuestions = (score === 0) ? 0 : (score / 4);
    const scorePercentage = (approvedQuestions/totalQuestions) * 100;
    const message = (scorePercentage > 60) ? 'Great Job! You approved' : 'Bad news for you! Need to perform better';
    

    return (
        <div className="final-score">
            <p>You got <b>{approvedQuestions}</b> correct out of <b>{totalQuestions}</b> questions</p>
            <h1>{scorePercentage}% - {message}</h1>
            <a href="/">Try Again</a>
        </div>
    );
}

export default finalScore;

finalScore.propTypes = {
    score: PropTypes.number.isRequired,
    totalQuestions: PropTypes.number.isRequired,
}