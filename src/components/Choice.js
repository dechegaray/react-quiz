import React from 'react';
import PropTypes from 'prop-types';

const choice = (props) => {
    const {choice, questionId, handleRadioChange} = props;

    const identifier = `qu-${questionId}ch-${choice.id}`;

    return (
        <div className="choice">
            <input 
                type="radio" 
                name="radio-choice"
                id={identifier}
                value={choice.id}
                onChange={handleRadioChange} 
            />
            <label>{choice.text}</label>  
        </div>
    );
}

export default choice;

choice.propTypes = {
    choice: PropTypes.object.isRequired,
    questionId: PropTypes.number.isRequired,
    handleRadioChange: PropTypes.func.isRequired,
}