import { createSlice } from '@reduxjs/toolkit';

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
  
  const response = {
    data: [{
      id: 1,
      title: "Que atividades você pratica ao menos uma vez por semana?",
      options: [{
        key: 1,
        value: "Natação"
      },
      {
        key: 2,
        value: "Atividade em ambiente fechado"
      },
      {
        key: 3,
        value: "Atividade ao ar livre"
      },
      {
        key: 4,
        value: "Praia"
      },
      {
        key: 5,
        value: "Sauna/Spa"
      },
      {
        key: 6,
        value: "Nenhuma"
      }]
    },
    {
      id: 2,
      title: "Qual o tipo de seu cabelo?",
      options: [{
        key: 1,
        value: "Liso"
      },
      {
        key: 2,
        value: "Ondulado"
      },
      {
        key: 3,
        value: "Cacheado"
      },
      {
        key: 4,
        value: "Crespo"
      }]
    }]
  };

  setTimeout(() => {
    // const response = await usersAPI.fetchAll()
    dispatch(questionsLoaded(response.data))
  }, 1000);
}

export const selectLoading = state => state.questionnaire.loading;
export const selectQuestions = state => state.questionnaire.questions;

export const { questionsLoading, questionsLoaded } = questionnaireSlice.actions;

export default questionnaireSlice.reducer;
