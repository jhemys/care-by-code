import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchQuestions,
  selectLoading,
  selectQuestions,
} from "./questionnaireSlice";
import Question from "./Question";

const Questionnaire = ({position, nextQuestion, prevQuestion}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);
  const loading = useSelector(selectLoading);
  const questions = useSelector(selectQuestions);

  return (
    <div>
      {loading
        ? "Carregando..."
        : questions.map((question, index) => (
            <Question
              position={position}
              nextQuestion={nextQuestion}
              prevQuestion={prevQuestion}
              key={index}
              questionIndex={index}
              id={question.id}
              title={question.title}
              options={question.options}
              isFinalQuestion={index === questions.length - 1}
            />
          ))}
    </div>
  );
}

export default Questionnaire;