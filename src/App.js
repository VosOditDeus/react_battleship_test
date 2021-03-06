import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from "./components/Game";

class App extends Component {
        // componentDidMount() {
        //     window.addEventListener("resize", () => this.updateDimensions(window.innerWidth));
        //     this.updateDimensions(window.innerWidth);
        // }
        //
        // componentWillUnmount() {
        //     window.removeEventListener("resize", () => this.updateDimensions(window.innerWidth));
        // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Game/>
      </div>
    );
  }
}

export default App;
