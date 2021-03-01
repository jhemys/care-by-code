import { createSlice } from '@reduxjs/toolkit';
import { getQuestions } from '../../database/questionDatabase';

export const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState: {
    userName: null,
    age: null,
    gender: null,
    questions: [],
    loading: false,
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

export const fetchQuestions = () => async dispatch => {
  dispatch(questionsLoading())
  
  getQuestions()
    .then(questions => dispatch(questionsLoaded(questions)));
}

export const selectLoading = state => state.questionnaire.loading;
export const selectQuestions = state => state.questionnaire.questions;

export const { questionsLoading, questionsLoaded } = questionnaireSlice.actions;

export default questionnaireSlice.reducer;
