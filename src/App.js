import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Team from './Components/Team/Team';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <Header />
        </header>
        <div>
          <Body />
          <Services />
          <Portfolio />
          <About />
          <Team />
        </div>
      </div>
    );
  }
}

export default App;
