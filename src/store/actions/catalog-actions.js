import firebase from '../../firebase';
import axios from '../../axios/axios';
import {
  FETCH_TESTS_START,
  FETCH_TESTS_SUCCESS,
  FETCH_TESTS_ERROR,
  ADD_TEST_TO_FAVORITES_SUCCESS,
  ADD_TEST_TO_FAVORITES_ERROR,
  REMOVE_TEST_SUCCESS,
  REMOVE_TEST_ERROR,
  ADD_NEW_TEST_ERROR,
  ADD_NEW_TEST_SUCCESS,
  EDIT_TEST_SUCCESS,
  EDIT_TEST_ERROR,
} from './actionTypes';

export const fetchTestsStart = () => ({
  type: FETCH_TESTS_START,
});

export const fetchTestsSuccess = tests => ({
  type: FETCH_TESTS_SUCCESS,
  tests,
});

export const fetchTestsError = error => ({
  type: FETCH_TESTS_ERROR,
  error,
});

export const fetchTests = () => async (dispatch) => {
  dispatch(fetchTestsStart());

  try {
    const response = await axios.get('tests.json');
    let { data } = response;
    if (!data) {
      data = {};
    }

    const tests = Object.keys(data)
      .reverse()
      .map((id) => {
        const test = data[id];
        test.id = id;
        test.info.id = id;
        return test;
      });

    dispatch(fetchTestsSuccess(tests));
  } catch (error) {
    dispatch(fetchTestsError(error));
  }
};

export const addTestToFavoritesSuccess = tests => ({
  type: ADD_TEST_TO_FAVORITES_SUCCESS,
  tests,
});

export const addTestToFavoritesError = () => ({
  type: ADD_TEST_TO_FAVORITES_ERROR,
});

export const addTestToFavorites = id => async (dispatch, getState) => {
  const { tests } = getState().catalog;
  const currentTest = tests.filter(test => test.id === id)[0];

  try {
    const response = await axios.put(`/tests/${id}.json`, {
      ...currentTest,
      info: {
        ...currentTest.info,
        isFavorite: !currentTest.info.isFavorite,
      },
    });
    const updatedTest = response.data;

    const updatedTests = tests.map((test) => {
      if (test.id === updatedTest.id) {
        return {
          ...test,
          ...updatedTest,
        };
      }
      return test;
    });
    dispatch(addTestToFavoritesSuccess(updatedTests));
  } catch (error) {
    dispatch(addTestToFavoritesError(error));
  }
};

export const addNewTestSuccess = test => ({
  type: ADD_NEW_TEST_SUCCESS,
  test,
});

export const addNewTestError = error => ({
  type: ADD_NEW_TEST_ERROR,
  error,
});

export const addNewTest = (info, imageFile) => dispatch => new Promise(async (resolve) => {
  const test = {
    info: {
      ...info,
      isFavorite: false,
    },
  };

  try {
    if (imageFile) {
      const imagesStorageRef = firebase.storage().ref('tests');
      const uploadTask = imagesStorageRef
        .child(imageFile.name)
        .put(imageFile);

      const snapshot = await uploadTask;
      test.info.image = await snapshot.ref.getDownloadURL();
    }

    const response = await axios.post('tests.json', test);
    test.id = response.data.name;
    test.info.id = response.data.name;
    dispatch(addNewTestSuccess(test));
    resolve();
  } catch (error) {
    dispatch(addNewTestError(error));
  }
});

export const removeTestSuccess = id => ({
  type: REMOVE_TEST_SUCCESS,
  id,
});

export const removeTestError = error => ({
  type: REMOVE_TEST_ERROR,
  error,
});

export const removeTest = id => async (dispatch) => {
  try {
    await axios.delete(`/tests/${id}.json`);
    dispatch(removeTestSuccess(id));
  } catch (error) {
    dispatch(removeTestError(error));
  }
};

export const editTestSuccess = tests => ({
  type: EDIT_TEST_SUCCESS,
  tests,
});

export const editTestError = error => ({
  type: EDIT_TEST_ERROR,
  error,
});

export const editTest = (info, imageFile) => (
  async (dispatch, getState) => new Promise(async (resolve) => {
    const { tests } = getState().catalog;
    const currentTest = tests.filter(test => test.info.id === info.id)[0];
    currentTest.info = {
      ...info,
    };

    try {
      if (imageFile) {
        const imagesStorageRef = firebase.storage().ref('tests');
        const uploadTask = imagesStorageRef
          .child(imageFile.name)
          .put(imageFile);

        const snapshot = await uploadTask;
        currentTest.info.image = await snapshot.ref.getDownloadURL();
      }

      await axios.put(`tests/${info.id}.json`, currentTest);
      const updatedTests = tests.map((test) => {
        if (test.id === info.id) {
          return {
            ...test,
            ...info,
          };
        }
        return test;
      });
      dispatch(editTestSuccess(updatedTests));
      resolve();
    } catch (error) {
      dispatch(editTestError(error));
    }
  })
);
