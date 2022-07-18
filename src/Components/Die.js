import React, { Component } from 'react';
import  './DieStyles.css'


export default class Die extends Component {
  render() {
    return <i className={`Die fas fa-dice-${this.props.face} ${this.props.rolling && "shaking"}`}></i>
  }
}

