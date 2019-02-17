import {
  CREATE_QUIZ_QUESTION,
  RESET,
} from '../actions/actionTypes';

const initialState = {
  quiz: [],
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
    default:
      return state;
  }
};
