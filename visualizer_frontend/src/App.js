import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import DailyData from './components/DailyData'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <DailyData />

        <Footer />
      </div>
    );
  }
}

export default App;
