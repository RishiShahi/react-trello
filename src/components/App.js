import React, { Component } from 'react';
import TrelloBoard from './TrelloBoard';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
      
      <div className="container">
     <TrelloBoard />
      </div>
      </div>
    )
  }
}

export default App;
