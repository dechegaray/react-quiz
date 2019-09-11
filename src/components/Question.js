import React, {Component} from 'react';
import Choice from './Choice';
import PropTypes from 'prop-types';

class Question extends Component {
    state = {
        selectedChoice: null
    }
    
    handleRadioChange = (e) => {
        this.setState({selectedChoice: e.target.value});
    }

    handleAnswerSubmit = (e) => {
        e.preventDefault();

        const {answer, setScore, setCurrent} = this.props;
        const score =  (this.state.selectedChoice === answer) ? 4 : 0;

        setScore(score);
        setCurrent();
    }

    render() {
        const {id, text, choices } = this.props;

        return (
            <li className="question">
                <header>
                    <p>{text}</p>
                </header>
                <section>
                    {
                        choices.map(
                            (choice) => {
                                return (
                                    <Choice 
                                        choice={choice}
                                        questionId={ id }
                                        key={choice.id}
                                        handleRadioChange={this.handleRadioChange}
                                    />
                                );
                            }
                        )
                    } 
                </section>
                <footer className="text-left">
                    <button className="btn btn-info" onClick={this.handleAnswerSubmit}>Submit</button>
                </footer>
            </li>
        );
    }
    
}

export default Question;

Question.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    choices: PropTypes.array.isRequired,
    answer:PropTypes.string.isRequired,
    setScore: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired
}