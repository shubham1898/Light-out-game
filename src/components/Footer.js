import React, { Component } from 'react'
import Style1 from './footer.module.css'
import './main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class Footer extends Component {
    render() {
 
        return (
            <div className={`${Style1.foot}`}>
               
                See Source code in GitHub <a  href='https://github.com/shubham1898/Light-out-game'><span className={Style1.icon}><FontAwesomeIcon icon={["fab", "github"]} /></span></a>
            </div>
        )
    }
}
