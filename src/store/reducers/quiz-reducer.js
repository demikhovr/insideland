import {
  FETCH_QUIZES_ERROR,
  FETCH_QUIZES_START,
  FETCH_QUIZES_SUCCESS,
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
  COPY_QUIZ_SUCCESS,
  COPY_QUIZ_ERROR,
} from '../actions/actionTypes';

const initialState = {
  quizes: [],
  results: {},
  error: null,
  isFinished: false,
  activeQuestion: 0,
  answerState: null,
  quiz: null,
  info: null,
  isLoading: false,
  time: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUIZES_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_QUIZES_SUCCESS:
      return {
        ...state,
        quizes: action.data.quizes,
        info: action.data.info,
        isLoading: false,
      };
    case FETCH_QUIZES_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case FETCH_QUIZ_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_QUIZ_SUCCESS:
      return {
        ...state,
        quiz: action.quiz,
        isLoading: false,
      };
    case FETCH_QUIZ_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case QUIZ_SET_STATE:
      return {
        ...state,
        answerState: action.answerState,
        results: action.results,
      };
    case QUIZ_FINISH:
      return {
        ...state,
        isFinished: true,
      };
    case QUIZ_NEXT_QUESTION:
      return {
        ...state,
        activeQuestion: action.number,
        answerState: null,
      };
    case QUIZ_RETRY:
      return {
        ...state,
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
      };
    case START_TIMER:
      return {
        ...state,
        time: 0,
      };
    case STOP_TIMER:
      return {
        ...state,
        time: state.time,
      };
    case TICK_TIMER:
      return {
        ...state,
        time: state.time + 1,
      };
    case REMOVE_QUIZ_SUCCESS:
      return {
        ...state,
        quizes: state.quizes.filter(quiz => quiz.id !== action.id),
      };
    case REMOVE_QUIZ_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case COPY_QUIZ_SUCCESS:
      return {
        ...state,
        quizes: [
          ...state.quizes,
          action.quiz,
        ],
      };
    case COPY_QUIZ_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case ADD_NEW_QUIZ_START:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_NEW_QUIZ_SUCCESS:
      return {
        ...state,
        isLoading: false,
        quizes: [
          ...state.quizes,
          action.newQuiz,
        ],
      };
    case ADD_NEW_QUIZ_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
