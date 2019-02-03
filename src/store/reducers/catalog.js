import {
  FETCH_TESTS_ERROR,
  FETCH_TESTS_START,
  FETCH_TESTS_SUCCESS,
  ADD_TEST_TO_FAVORITES_SUCCESS,
  ADD_TEST_TO_FAVORITES_ERROR,
  ADD_NEW_TEST_SUCCESS,
  ADD_NEW_TEST_ERROR,
  REMOVE_TEST_SUCCESS,
  REMOVE_TEST_ERROR,
  EDIT_TEST_SUCCESS,
  EDIT_TEST_ERROR,
} from '../actions/actionTypes';

const initialState = {
  tests: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TESTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_TESTS_SUCCESS:
      return {
        ...state,
        tests: action.tests,
        isLoading: false,
      };
    case FETCH_TESTS_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case ADD_TEST_TO_FAVORITES_SUCCESS:
      return {
        ...state,
        tests: action.tests,
      };
    case ADD_TEST_TO_FAVORITES_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case ADD_NEW_TEST_SUCCESS:
      return {
        ...state,
        tests: [action.test, ...state.tests],
      };
    case ADD_NEW_TEST_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case REMOVE_TEST_SUCCESS:
      return {
        ...state,
        tests: state.tests.filter(test => test.id !== action.id),
      };
    case REMOVE_TEST_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case EDIT_TEST_SUCCESS:
      return {
        ...state,
        tests: action.tests,
      };
    case EDIT_TEST_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
