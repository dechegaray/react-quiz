import React, {Component} from 'react';
import LiveScore from './components/LiveScore';
import FinalScore from './components/FinalScore';
import QuestionList from './components/QuestionList';
import {getQuestions} from './utils/api';

class App extends Component {
  state = {
    questions: [],
    current: 1,
    score: 0,
  }

  componentDidMount() {
    getQuestions()
      .then(response => {
        this.setState({questions: response})
      })
      .catch(error => console.error(error));
  }

  setCurrent = () => {
    this.setState((prevState) => {
      return {current: prevState.current +1};
    })
  }

  setScore = (scoreToAdd) => {
    this.setState((prevState) => {
      return {score: prevState.score + scoreToAdd};
    })
  }

  render() {
    const {questions, current, score} = this.state;

    let componentToShow = null;

    if (questions.length > 0 && current > questions.length) {
      componentToShow = (
        <FinalScore score={score} totalQuestions={questions.length} />
      );
    } else {
      componentToShow = (
        <div>
          <LiveScore score={score} current={current} totalQuestions={questions.length} />
          <QuestionList 
            questions={questions}
            current={current}
            setCurrent={this.setCurrent}
            setScore={this.setScore}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <div className="container mt-3">
          <h1>React Quiz</h1>
          <p>A simple quiz developed in React to test its features</p>
          { componentToShow }
        </div>
      </div>
    );
  }
}

export default App;
