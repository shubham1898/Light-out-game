import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Game from './components/GameMain'
import './components/main.css'


class App extends Component {
  render() {
    return (
      <div className={`container`}>
        <Header />
        <Game/>
        <Footer/>
      </div>
    );
  }
}

export default App;

