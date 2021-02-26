import React, { useState } from "react";
import Questionnaire from "./Questionnaire";
import { Formik, Form, Field } from "formik";

const SurveyForm = () => {
  const [position, setSurveyPosition] = useState(0);

  const nextQuestion = () => setSurveyPosition(position + 1);
  const prevQuestion = () => setSurveyPosition(position - 1);

  return (
    <Formik
      initialValues={{ name: "", age: "", gender: "", questions: [] }}
      onSubmit={(values) => console.log(values)}
    >
      {(props) => (
        <Form onSubmit={props.handleSubmit}>
          <div className={position === 0 ? "current-survey" : "hidden-survey"}>
            <p>
              <Field type="text" name="name" placeholder="Nome" />
            </p>
            <p>
              <Field type="number" name="age" placeholder="Idade" />
            </p>
            <br />
            Sexo:
            <label>
              <Field type="radio" name="gender" value="M" />
              Mulher
            </label>
            <label>
              <Field type="radio" name="gender" value="H" />
              Homem
            </label>
            <label>
              <Field type="radio" name="gender" value="X" />
              Prefiro Não Informar
            </label>
            <br />
            <button type="button" onClick={() => setSurveyPosition(position + 1)}>
              Next
            </button>
          </div>
          <Questionnaire
            nextQuestion={nextQuestion}
            prevQuestion={prevQuestion}
            position={position}
          />
          {props.errors.name && <div id="feedback">{props.errors.name}</div>}
        </Form>
      )}
    </Formik>
  );
};

export default SurveyForm;
