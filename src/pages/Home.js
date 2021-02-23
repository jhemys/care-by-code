import React, { useState } from "react";
import Questionnaire from "./../features/questionnaire/Questionnaire";
// import { writeQuestionsData } from './../database/questionDatabase';

function Home() {
  // writeQuestionsData("1", "test", "a.a", "aa");
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  console.log(gender);
  return (
    <div className="App">
      <p>
        Nome:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </p>
      <p>
        Idade:{" "}
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </p>
      <p>
        Sexo: <input type="radio" value="M" name="gender" id="M" onChange={e => setGender(e.target.value)} />
        <label for="M">Mulher</label>
        <input type="radio" value="H" name="gender" id="H" onChange={e => setGender(e.target.value)} />
        <label for="H">Homem</label>
        <input type="radio" value="X" name="gender" id="X" onChange={e => setGender(e.target.value)} />
        <label for="X">Prefiro Não Informar</label>
      </p>
      <Questionnaire />
    </div>
  );
}

export default Home;
