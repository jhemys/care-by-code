import React from 'react';
import { writeQuestionsData } from './../database/questionDatabase';

function Home() {
  writeQuestionsData("1", "test", "a.a", "aa");
  return (
    <div className="App">
      Test
    </div>
  );
}

export default Home;
