import React, { Component } from 'react';
import TicTacToe from 'containers/TicTacToe';
import GithubCorner from 'react-github-corner';
import {
  THEME_DARKEN,
} from 'containers/StyleConstants';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TicTacToe />
        <GithubCorner bannerColor={THEME_DARKEN} href="https://github.com/TimingJL/tic-tac-toe" />
      </div>
    );
  }
}

export default App;
