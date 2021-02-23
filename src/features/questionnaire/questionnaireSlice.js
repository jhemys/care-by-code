import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    questions: [],
    loading: false
  },
  reducers: {
    questionsLoading: state => {
      if (!state.loading) {
        state.loading = true;
      }
    },
    questionsLoaded: (state, action) => {
      if (state.loading) {
        state.loading = false;
        state.questions = action.payload;
      }
    },
  },
});

export const { questionsLoading, questionsLoaded } = counterSlice.actions;

const fetchQuestions = () => async dispatch => {
  dispatch(questionsLoading())
  const response = await usersAPI.fetchAll()
  dispatch(questionsLoaded(response.data))
}