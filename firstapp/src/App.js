import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      speed: 25
    }
  }

  // runs 1 time when the application is launched
  // great place for real time database
  componentDidMount() {
    const rootRef = firebase.database().ref().child('firstName');
    const speedRef = rootRef.child('1'); 
    speedRef.on('value', snap => {
      this.setState({
      speed: snap.val()
      });
    });
  }

  render() {
    return (
      <div class="App">
      <h1>Hello First App!</h1>
      <h2>{this.state.speed}</h2>
      </div>
    );
  }
}

export default App;
