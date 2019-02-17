/* eslint-disable */
import {
  CREATE_QUIZ_QUESTION,
  RESET,
} from './actionTypes';

export const createQuizQuestion = item => ({
  type: CREATE_QUIZ_QUESTION,
  item,
});

export const reset = () => ({
  type: RESET,
});
