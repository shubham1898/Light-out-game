import React, { Component } from 'react'
import Style1 from './header.module.css'
import './main.css'


export default class Header extends Component {
    render() {
        return (
            <div className={`${Style1.head}`}>
               <h1> Welcome to LIGHT OUT Game</h1>
                <h5>Turn the whole Board <span className={Style1.red}>RED</span> in least numer of step</h5>
            </div>
        )
    }
}


