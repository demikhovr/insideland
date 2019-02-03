import React, { Component } from 'react';
import firebase from 'firebase';
import classes from './Quiz.module.scss';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import Loader from '../../components/UI/Loader/Loader';
import Timer from '../../components/Timer/Timer';

const SECOND = 1000;
const formattedSeconds = sec => `${Math.floor(sec / 60)}:${(`0${sec % 60}`).slice(-2)}`;

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      results: {},
      isFinished: false,
      activeQuestion: 0,
      answerState: null,
      isLoading: true,
    };
    this.onAnswerClickHandler = this.onAnswerClickHandler.bind(this);
    this.onRetryHandler = this.onRetryHandler.bind(this);
    this.areAllAnswersRight = this.areAllAnswersRight.bind(this);
  }

  async componentDidMount() {
    const { props } = this;
    const { parentId } = props.location.state;
    const { id } = props.match.params;
    try {
      this.testRef = firebase.database().ref(`tests/${parentId}/quizes/${id}`);
      const snapshot = await this.testRef.once('value');
      const response = snapshot.val();
      console.log(response);

      if (!response.isPassed) {
        await this.testRef.update({
          isPassed: false,
        });
      }

      this.setState({
        quiz: response.quiz,
        isLoading: false,
      });

      this.start();
    } catch (e) {
      console.log(e);
    }
  }

  componentWillUnmount() {
    this.testRef.off();
    this.stop();
  }

  onAnswerClickHandler(answerId) {
    const { state } = this;
    const { results } = state;
    const question = state.quiz[state.activeQuestion];

    if (state.answerState) {
      const key = Object.keys(state.answerState)[0];

      if (state.answerState[key] === 'success') {
        return;
      }
    }

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success';
      }

      this.setState({
        answerState: { [answerId]: 'success' },
        results,
      });

      const timeout = window.setTimeout(async () => {
        if (this.isQuizFinished()) {
          const { props } = this;
          const { parentId } = props.location.state;
          const { id } = props.match.params;
          try {
            this.testRef = firebase.database().ref(`tests/${parentId}/quizes/${id}`);
            await this.testRef.update({
              isFinished: true,
              isPassed: this.areAllAnswersRight(),
              time: formattedSeconds(state.time),
            });
            this.setState({ isFinished: true });
          } catch (e) {
            console.log(e);
          }
        } else {
          this.setState(prevState => ({
            activeQuestion: prevState.activeQuestion + 1,
            answerState: null,
          }));
        }

        window.clearTimeout(timeout);
      }, 1000);
    } else {
      results[question.id] = 'error';

      this.setState({
        answerState: { [answerId]: 'error' },
        results,
      });
    }
  }

  onRetryHandler() {
    this.setState({
      results: {},
      isFinished: false,
      activeQuestion: 0,
      answerState: null,
    });
  }

  start() {
    this.timerId = setInterval(() => this.tick(), SECOND);
  }

  stop() {
    clearTimeout(this.timerId);
  }

  tick() {
    this.setState(prevState => ({ time: prevState.time + 1 }));
  }

  isQuizFinished() {
    const { state } = this;
    return state.activeQuestion + 1 === state.quiz.length;
  }

  areAllAnswersRight() {
    const { state } = this;
    return Object.keys(state.results).map(key => state.results[key]).every(result => result === 'success');
  }

  render() {
    const { state, props } = this;

    const getCurrentQuiz = () => (state.isFinished
      ? (
        <FinishedQuiz
          results={state.results}
          quiz={state.quiz}
          time={state.time}
          onRetry={this.onRetryHandler}
          location={props.location}
        />
      )
      : (
        <ActiveQuiz
          question={state.quiz[state.activeQuestion].question}
          answers={state.quiz[state.activeQuestion].answers}
          onAnswerClick={this.onAnswerClickHandler}
          answerNumber={state.activeQuestion + 1}
          quizLength={state.quiz.length}
          state={state.answerState}
        />
      ));

    return (
      <div className={classes.Quiz}>
        {state.isLoading || !state.quiz
          ? <Loader />
          : (
            <div className={classes.QuizWrapper}>
              {!state.isFinished ? <Timer time={formattedSeconds(state.time)} /> : null}
              <h1>Ответьте на все вопросы</h1>
              {getCurrentQuiz()}
            </div>
          )}
      </div>
    );
  }
}

export default Quiz;
