import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {
  // constructor to set state
  constructor() {
    super();
    this.state = {
      speed: 25
    }
  }


  // LifeCycle method
  // set up listeners on the database
  componentDidMount() {
    // reference to database
    const rootRef = firebase.database().ref().child('firstName');
    const speedRef = rootRef.child('1');
    // on method allows sync data in real time 
    // attach to a reference that points to a 
    // place in the database
    speedRef.on('value', snap => {
      // setState will rerender the application 
      this.setState({
        speed: snap.val()
      });
    });
  }

  render() {
    // template
    return (
      <div className="App">
        <h1>Hello First App!</h1>
        <h2>{this.state.speed}</h2>
      </div>
    );
  }
}

export default App;
