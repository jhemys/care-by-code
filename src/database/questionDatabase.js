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