import React, { Component } from 'react';
import classes from './Quiz.module.scss';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {}, // { [id]: 'success' 'error' }
      isFinished: false,
      activeQuestion: 0,
      answerState: null, // { [id]: 'success' 'error' }
      quiz: [
        {
          id: 1,
          question: '2 + 2 ?',
          answers: [
            { text: '125', id: 1 },
            { text: '2', id: 2 },
            { text: '3', id: 3 },
            { text: '4', id: 4 },
          ],
          rightAnswerId: 4,
        },
        {
          id: 2,
          question: 'Вопрос?',
          answers: [
            { text: 'Ответ?', id: 1 },
            { text: 'Да', id: 2 },
            { text: 'Нет', id: 3 },
            { text: 'Лопата', id: 4 },
          ],
          rightAnswerId: 2,
        },
        {
          id: 3,
          question: 'Привет?',
          answers: [
            { text: 'Да', id: 1 },
            { text: 'Нет', id: 2 },
            { text: 'Привет', id: 3 },
            { text: 'Что?', id: 4 },
          ],
          rightAnswerId: 3,
        },
        {
          id: 4,
          question: 'Какого цвета небо?',
          answers: [
            { text: 'Черный', id: 1 },
            { text: 'Синий', id: 2 },
            { text: 'Красный', id: 3 },
            { text: 'Зеленый', id: 4 },
          ],
          rightAnswerId: 2,
        },
        {
          id: 5,
          question: 'В каком году основали Санкт-Петербург?',
          answers: [
            { text: '1700', id: 1 },
            { text: '1702', id: 2 },
            { text: '1703', id: 3 },
            { text: '1803', id: 4 },
          ],
          rightAnswerId: 3,
        },
      ],
    };
    this.onAnswerClickHandler = this.onAnswerClickHandler.bind(this);
    this.onRetryHandler = this.onRetryHandler.bind(this);
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

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({ isFinished: true });
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

  isQuizFinished() {
    const { state } = this;
    return state.activeQuestion + 1 === state.quiz.length;
  }

  render() {
    const { state, props } = this;

    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>

          {state.isFinished
            ? (
              <FinishedQuiz
                results={state.results}
                quiz={state.quiz}
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
            )}
        </div>
      </div>
    );
  }
}

export default Quiz;
