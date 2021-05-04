import React from "react";
import SurveyForm from "./../features/questionnaire/SurveyForm";
// import { writeQuestionsData } from './../database/questionDatabase';

import "./../features/questionnaire/Survey.css";

function Home() {
  // console.log(process.env);
  // writeQuestionsData("1", "test", "a.a", "aa");
  return (
    <header id="header">
      <SurveyForm />
    </header>
  );
}

export default Home;
