import React from "react";
import SurveyForm from "./../features/questionnaire/SurveyForm";
// import { writeQuestionsData } from './../database/questionDatabase';

import './../features/questionnaire/Survey.css';

function Home() {
  // writeQuestionsData("1", "test", "a.a", "aa");
  return (
    <div className="App">
      <SurveyForm />
    </div>
  );
}

export default Home;
