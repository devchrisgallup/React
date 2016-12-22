import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase'; 


// Initialize Firebase
var config = {
  // Firebase Setting Go Here
};
firebase.initializeApp(config);

const db = firebase.database();
const dbRef = db.ref().child('data');

dbRef.on('value', snapshot => {
  this.setState({
    data: snapshot.val()
  });
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
