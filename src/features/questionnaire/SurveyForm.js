import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import Questionnaire from "./Questionnaire";
import { Formik, Form, Field } from "formik";
import FormikPersist from './FormikPersist';

const SurveyForm = () => {
  const [position, setSurveyPosition] = useState(0);
  const [showWelcomeMessage, toggleWelcomeMessage] = useState(false);

  const nextQuestion = () => setSurveyPosition(position + 1);
  const prevQuestion = () => setSurveyPosition(position - 1);

  return (
    <Formik
      initialValues={{ name: "", age: "", gender: "", questions: [] }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        setSubmitting(false);
        resetForm({ values: { name: "", age: "", gender: "", questions: [] } });
      }}
    >
      {(props) => (
        <Form onSubmit={props.handleSubmit}>
          {position === 0 && (
            <p>
              <img src="assets/css/images/logo.png" alt="a" border={0} />
            </p>
          )}
          <div className={position === 0 ? "current-survey" : "hidden-survey"}>
            <p>Olá, como você gosta de ser chamado/a?</p>
            <p>
              <Field
                type="text"
                className="inputForm"
                name="name"
                placeholder="Nome"
                onBlur={() => toggleWelcomeMessage(true)}
              />
            </p>
            {showWelcomeMessage && (
              <p className="textName questao-respondida">
                Que bom te ver aqui, {props.values.name}!
              </p>
            )}
            <p>Quando é seu aniversário?</p>
            <p>
              <Field
                type="number"
                className="inputForm"
                name="age"
                placeholder="Idade"
              />
            </p>
            <p>Você gostaria de informar seu gênero?</p>
            <p>
              <Chip
                label="Mulher"
                onClick={() => {
                  props.setFieldValue("gender", "F");
                }}
                variant={props.values.gender === "F" ? undefined : "outlined"}
                className="btnPadrão"
              />
              <Chip
                label="Homem"
                onClick={() => {
                  props.setFieldValue("gender", "M");
                }}
                variant={props.values.gender === "M" ? undefined : "outlined"}
                className="btnPadrão"
              />
              <Chip
                label="Não gostaria"
                onClick={() => {
                  props.setFieldValue("gender", "X");
                }}
                variant={props.values.gender === "X" ? undefined : "outlined"}
                className="btnPadrão"
              />
            </p>
            <p>
              <button
                type="button"
                onClick={() => setSurveyPosition(position + 1)}
              >
                Next
              </button>
            </p>
          </div>
          <Questionnaire
            nextQuestion={nextQuestion}
            prevQuestion={prevQuestion}
            position={position}
          />
          {/* <AutoSave debounceMs={1000} /> */}
          
          <FormikPersist name="form" />
          {props.errors.name && <div id="feedback">{props.errors.name}</div>}

          {position === 0 && (
            <nav>
              <ul>
                <li>
                  <a href="www.google.com" className="icon brands fa-twitter">
                    <span className="label">Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href="www.google.com"
                    className="icon brands fa-facebook-f"
                  >
                    <span className="label">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="www.google.com" className="icon brands fa-dribbble">
                    <span className="label">Dribbble</span>
                  </a>
                </li>
                <li>
                  <a href="www.google.com" className="icon brands fa-github">
                    <span className="label">Github</span>
                  </a>
                </li>
                <li>
                  <a href="www.google.com" className="icon solid fa-envelope">
                    <span className="label">Email</span>
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default SurveyForm;
