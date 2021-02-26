import React from "react";
import { useFormikContext } from "formik";

const Question = ({
  id,
  title,
  questionIndex,
  options,
  isFinalQuestion,
  position,
  nextQuestion,
  prevQuestion,
}) => {
  const { values, setFieldValue } = useFormikContext();

  const questionPosition = questionIndex + 1;
  
  return (
    <div
      className={
        position === questionPosition ? "current-survey" : "hidden-survey"
      }
    >
      <h1>{title}</h1>
      {options.map((option, index) => (
        <p key={index}>
          <label>
            <input
              type="radio"
              name={`questions.${questionIndex}.value`}
              value={option.key}
              checked={
                (values?.questions &&
                  values.questions[questionIndex] &&
                  values.questions[questionIndex].value === option.key) ||
                false
              }
              onChange={() =>
                setFieldValue(`questions.${questionIndex}.value`, option.key)
              }
            />
            {/* <Field
              type="radio"
              name={`questions.${questionIndex}.value`}
              checked={
                values.questions[questionIndex] &&
                values.questions[questionIndex].value === option.key
              }
              value={option.key}
            /> */}
            {option.value}
          </label>
        </p>
      ))}
      <button type="button" onClick={prevQuestion}>
        Voltar
      </button>
      {isFinalQuestion ? (
        <p>
          <button type="submit">Submit</button>
        </p>
      ) : (
        <button type="button" onClick={nextQuestion}>
          Próxima
        </button>
      )}
    </div>
  );
};

export default Question;
