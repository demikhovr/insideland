import axios from '../../axios/axios';
import {
  CREATE_QUIZ_QUESTION,
  RESET_QUIZ_CREATION,
} from './actionTypes';

export const createQuizQuestion = item => ({
  type: CREATE_QUIZ_QUESTION,
  item,
});

export const resetQuizCreation = () => ({
  type: RESET_QUIZ_CREATION,
});

export const finishCreateQuiz = () => async (dispatch, getState) => {
  const state = getState().create;
  await axios.post('/quizes.json', state.quiz);
  dispatch(resetQuizCreation());
};
