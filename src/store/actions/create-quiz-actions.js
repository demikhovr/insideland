import {
  CREATE_QUIZ_QUESTION,
  RESET,
  SET_QUIZ_NAME,
} from './actionTypes';

export const createQuizQuestion = item => ({
  type: CREATE_QUIZ_QUESTION,
  item,
});

export const reset = () => ({
  type: RESET,
});

export const setQuizName = name => ({
  type: SET_QUIZ_NAME,
  name,
});
