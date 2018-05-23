import React, { Component } from 'react';
import { triviaQuestions, categories } from './api.js';
import TriviaList from './TriviaList.js';
import Controls from './Controls.js';

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      triviaQuestions: triviaQuestions || [],
    }
  }

  render () {
    return (
      <div>
        <h1>Trivia!</h1>
        <TriviaList questions={this.state.triviaQuestions} />
      </div>
    )
  }
}