import React from "react";
import { useFormikContext } from "formik";
import Chip from "@material-ui/core/Chip";

const Question = ({
  id,
  title,
  questionIndex,
  options,
  isFinalQuestion,
  position,
  nextQuestion,
  prevQuestion,
  questionAnsweredMessage,
  imageUrl,
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
          <Chip
            label={option.value}
            onClick={() => {
              setFieldValue(`questions.${questionIndex}.value`, option.key);
            }}
            variant={
              values?.questions &&
              values.questions[questionIndex] &&
              values.questions[questionIndex].value === option.key
                ? undefined
                : "outlined"
            }
            className="btnPadrão"
          />
        </p>
      ))}
      {values?.questions &&
        values.questions[questionIndex] &&
        values.questions[questionIndex].value && (
          <p
            className={
              values?.questions &&
              values.questions[questionIndex] &&
              values.questions[questionIndex].value
                ? "questao-respondida"
                : null
            }
          >
            {questionAnsweredMessage}
          </p>
        )}
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
      <p className="imgBottom">
        {imageUrl && <img src={`assets/css/images/${imageUrl}`} alt="" />}
      </p>
    </div>
  );
};

export default Question;
