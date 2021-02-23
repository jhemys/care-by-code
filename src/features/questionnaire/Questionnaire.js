import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchQuestions,
  selectLoading,
  selectQuestions
} from './questionnaireSlice';
// import styles from './Counter.module.css';

export default function Questionnaire() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch])
  const loading = useSelector(selectLoading);
  const questions = useSelector(selectQuestions);
  

  return (
    <div>
      {loading ? "Carregando..." : questions.map(question => 
        <>
          <h1>{question.title}</h1>
          {question.options.map(option => 
            <p>
              <input type="radio" value={option.key} name={question.id} id={`${question.id}_${option.key}`} />
              <label for={`${question.id}_${option.key}`}>{option.value}</label>
            </p>
          )}
        </>
      )}    
      
    </div>
  );
}
