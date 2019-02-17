import axios from '../../axios/axios';
import {
  FETCH_QUIZES_START,
  FETCH_QUIZES_SUCCESS,
  FETCH_QUIZES_ERROR,
  FETCH_QUIZ_START,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZ_ERROR,
  QUIZ_SET_STATE,
  QUIZ_FINISH,
  QUIZ_NEXT_QUESTION,
  QUIZ_RETRY,
  START_TIMER,
  STOP_TIMER,
  TICK_TIMER,
  REMOVE_QUIZ_SUCCESS,
  REMOVE_QUIZ_ERROR,
  ADD_NEW_QUIZ_START,
  ADD_NEW_QUIZ_SUCCESS,
  ADD_NEW_QUIZ_ERROR,
} from './actionTypes';

const SECOND = 1000;
let timer = null;

export const formattedSeconds = sec => `${Math.floor(sec / 60)}:${(`0${sec % 60}`).slice(-2)}`;
export const areAllAnswersRight = state => Object.keys(state.results).map(key => state.results[key]).every(result => result === 'success');
export const isQuizFinished = state => state.activeQuestion + 1 === state.quiz.length;

export const fetchQuizesStart = () => ({
  type: FETCH_QUIZES_START,
});

export const fetchQuizesSuccess = data => ({
  type: FETCH_QUIZES_SUCCESS,
  data,
});

export const fetchQuizesError = err => ({
  type: FETCH_QUIZES_ERROR,
  error: err,
});

export const fetchQuizes = quizId => async (dispatch) => {
  dispatch(fetchQuizesStart());
  try {
    const response = await axios.get(`/tests/${quizId}.json`);
    const data = {
      info: { ...response.data.info },
      quizes: [],
    };

    if (response.data.quizes) {
      data.quizes = Object.keys(response.data.quizes).map(key => ({
        ...response.data.quizes[key],
        id: key,
      }));
    }

    dispatch(fetchQuizesSuccess(data));
  } catch (err) {
    dispatch(fetchQuizesError(err));
  }
};

export const fetchQuizStart = ({
  type: FETCH_QUIZ_START,
});

export const fetchQuizSuccess = quiz => ({
  type: FETCH_QUIZ_SUCCESS,
  quiz,
});

export const fetchQuizError = err => ({
  type: FETCH_QUIZ_ERROR,
  error: err,
});

export const tick = () => ({ type: TICK_TIMER });

export const startTimer = () => (dispatch) => {
  clearInterval(timer);
  dispatch({ type: START_TIMER });
  timer = setInterval(() => dispatch(tick()), SECOND);
};

export const stopTimer = () => {
  clearInterval(timer);
  return {
    type: STOP_TIMER,
  };
};

export const fetchQuizById = (testId, id) => async (dispatch) => {
  try {
    dispatch(fetchQuizStart);

    const response = await axios.get(`/tests/${testId}/quizes/${id}.json`);
    const { data } = response;
    const { quiz } = data;

    if (!response.isPassed) {
      await axios.put(`/tests/${testId}/quizes/${id}.json`, {
        ...data,
        isPassed: false,
      });
    }

    dispatch(fetchQuizSuccess(quiz));
    dispatch(startTimer());
  } catch (err) {
    dispatch(fetchQuizError(err));
  }
};

export const quizSetState = (answerState, results) => ({
  type: QUIZ_SET_STATE,
  answerState,
  results,
});

export const finishQuiz = () => ({
  type: QUIZ_FINISH,
});

export const quizNextQuestion = number => ({
  type: QUIZ_NEXT_QUESTION,
  number,
});

export const quizAnswerClick = (answerId, testId, id) => (dispatch, getState) => {
  const state = getState().quiz;
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

    dispatch(quizSetState({ [answerId]: 'success' }, results));

    const timeout = window.setTimeout(() => {
      if (isQuizFinished(state)) {
        dispatch(stopTimer());
        const isPassed = areAllAnswersRight(state);
        const time = formattedSeconds(state.time);
        const item = state.quizes.filter(quiz => quiz.id === id)[0];
        axios.put(`/tests/${testId}/quizes/${id}.json`, {
          ...item,
          time,
          isPassed,
        });
        dispatch(finishQuiz());
      } else {
        dispatch(quizNextQuestion(state.activeQuestion + 1));
      }

      window.clearTimeout(timeout);
    }, SECOND);
  } else {
    results[question.id] = 'error';
    dispatch(quizSetState({ [answerId]: 'error' }, results));
  }
};

export const retryQuiz = () => (dispatch) => {
  dispatch({ type: QUIZ_RETRY });
  dispatch(startTimer());
};

export const stopQuiz = () => (dispatch) => {
  dispatch({ type: QUIZ_RETRY });
  dispatch(stopTimer());
};

export const removeQuizSuccess = id => ({
  type: REMOVE_QUIZ_SUCCESS,
  id,
});

export const removeQuizError = error => ({
  type: REMOVE_QUIZ_ERROR,
  error,
});

export const removeQuiz = (testId, id) => async (dispatch) => {
  try {
    await axios.delete(`tests/${testId}/quizes/${id}.json`);
    dispatch(removeQuizSuccess(id));
  } catch (error) {
    dispatch(removeQuizError(error));
  }
};

export const addNewQuizStart = () => ({
  type: ADD_NEW_QUIZ_START,
});

export const addNewQuizSuccess = newQuiz => ({
  type: ADD_NEW_QUIZ_SUCCESS,
  newQuiz,
});

export const addNewQuizError = error => ({
  type: ADD_NEW_QUIZ_ERROR,
  error,
});

export const addNewQuiz = (id, data) => async (dispatch) => {
  dispatch(addNewQuizStart());

  try {
    const quiz = {
      type: 'numeric', name: 'Тест 1', questionCount: data.length, isFinished: null, quiz: data,
    };
    const response = await axios.post(`tests/${id}/quizes.json`, quiz);
    quiz.id = response.data.name;
    dispatch(addNewQuizSuccess(quiz));
  } catch (err) {
    dispatch(addNewQuizError(err));
  }
};
