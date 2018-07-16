import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';

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
          <About/>
        </div>
      </div>
    );
  }
}

export default App;
