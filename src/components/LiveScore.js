import React from 'react';
import PropTypes from 'prop-types';

const liveScore = (props) => {
    const {score, current, totalQuestions} = props;

    return (
        <div className="live-score">
            <div className="d-block">
                <p className="float-left">
                    Question <b>{current}</b> out of <b>{totalQuestions}</b>
                </p>
                <p className="float-right">
                    <b>Score: {score}</b>
                </p> 
            </div>
        </div>
    );
}

export default liveScore;

liveScore.propTypes = {
    score: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    totalQuestions: PropTypes.number.isRequired,
}