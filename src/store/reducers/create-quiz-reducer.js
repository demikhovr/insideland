import {
  CREATE_QUIZ_QUESTION,
  RESET,
  SET_QUIZ_NAME,
} from '../actions/actionTypes';

const initialState = {
  quiz: [],
  name: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_QUIZ_QUESTION:
      return {
        ...state,
        quiz: [...state.quiz, action.item],
      };
    case RESET:
      return {
        ...initialState,
      };
    case SET_QUIZ_NAME:
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
};
