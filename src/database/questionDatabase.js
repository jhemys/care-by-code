import firebase from "firebase/app";
import "firebase/database";
import "./base";

export function writeQuestionsData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

export const getQuestions = async () => {
  let questions = [];
  const ref = firebase.database().ref('questions/').once('value');
  var returnList = (await ref).val()
  if (returnList) { 
    questions = Object.values(returnList);
    questions = questions
      .filter((x) => x.active)
      .sort((a, b) => a.order - b.order);
  }

  return questions;
}