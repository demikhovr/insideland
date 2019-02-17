import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Quiz.module.scss';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import Loader from '../../components/UI/Loader/Loader';
import Timer from '../../components/Timer/Timer';
import {
  formattedSeconds,
  fetchQuizById,
  quizAnswerClick,
  retryQuiz,
  stopQuiz,
} from '../../store/actions/quiz-actions';


class Quiz extends Component {
  async componentDidMount() {
    const { props } = this;
    const { testId } = props.location.state;
    const { id } = props.match.params;
    props.fetchQuizById(testId, id);
  }

  componentWillUnmount() {
    const { props } = this;
    props.stopQuiz();
  }

  render() {
    const { props } = this;
    const { testId } = props.location.state;
    const { id } = props.match.params;
    const getQuiz = () => (props.isFinished
      ? (
        <FinishedQuiz
          results={props.results}
          quiz={props.quiz}
          onRetry={props.retryQuiz}
          time={props.time}
          location={props.location}
        />
      )
      : (
        <ActiveQuiz
          question={props.quiz[props.activeQuestion].question}
          answers={props.quiz[props.activeQuestion].answers}
          onAnswerClick={answerId => props.quizAnswerClick(answerId, testId, id)}
          answerNumber={props.activeQuestion + 1}
          quizLength={props.quiz.length}
          state={props.answerState}
        />
      ));

    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          {!props.isFinished ? <Timer time={formattedSeconds(props.time)} /> : null}
          {props.loading || !props.quiz
            ? <Loader />
            : getQuiz()
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  results: state.quiz.results,
  isFinished: state.quiz.isFinished,
  activeQuestion: state.quiz.activeQuestion,
  answerState: state.quiz.answerState,
  quiz: state.quiz.quiz,
  loading: state.quiz.loading,
  time: state.quiz.time,
});

const mapDispatchToProps = dispatch => ({
  fetchQuizById: (testId, id) => dispatch(fetchQuizById(testId, id)),
  quizAnswerClick: (answerId, testId, id) => dispatch(quizAnswerClick(answerId, testId, id)),
  retryQuiz: () => dispatch(retryQuiz()),
  stopQuiz: () => dispatch(stopQuiz()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
