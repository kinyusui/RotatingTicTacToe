import React, { Component } from 'react';
import './App.css';
import Board from './Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Rotating Tic Tac Toe</h1>
        </header>
        <div>
          <Board/>
        </div>
      </div>
    );
  }
}

export default App;
