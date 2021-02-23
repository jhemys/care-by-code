import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import counterReducer from '../features/counter/counterSlice';
import questionnaireReducer from '../features/questionnaire/questionnaireSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    questionnaire: questionnaireReducer
  },
}, applyMiddleware(thunk));
