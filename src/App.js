import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Game from './components/GameMain'
import './components/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)


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

