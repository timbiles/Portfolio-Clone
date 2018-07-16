import React, { Component } from 'react';
import './Body.css';

export default class Body extends Component {
  render() {
    return (
      <div className="main_text">
        <h3 className="welcome_msg"> Welcome To Our Studio! </h3>
        <h1 className="main_msg"> It's Nice to Meet You </h1>
        <button className='more_btn'>Tell Me More</button>
      </div>
    );
  }
}
