import React, { Component } from 'react';
import './Services.css';

export default class Services extends Component {
  render() {
    return (
      <div className="container">
        <div className="title_container">
          <h1>Services</h1>
          <p className='title_sub'>Lorem ipsum hodor hodor hodor hodor</p>
        </div>
        <div className="icons_box_container">
          <div className="box">
            <div className="circle" />
            <h2> E-Commerce </h2>
            <p className='txt_container'>
              hodor Hodor Olive hodor Olive hodor hodor hodor Olive hodor hodor
              hodor Olive hodor hodor hodor Olive hodor Olive hodor hodor Olive
              hodor hodor Olive hodor hodor
            </p>
          </div>
          <div className="box">
            <div className="circle" />
            <h2> Responsive Design </h2>
            <p className='txt_container'>
              Hodor hodor Hodor Olive hodor Olive hodor hodor hodor Olive hodor
              hodor hodor Olive hodor hodor hodor Olive hodor Olive hodor hodor
              Olive hodor hodor hodor hodor
            </p>
          </div>
          <div className="box">
            <div className="circle" />
            <h2> Web Security </h2>
            <p className='txt_container'>
              Hodor Olive hodor Olive hodor hodor hodor Olive hodor hodor hodor
              Olive hodor hodor hodor Olive hodor Olive hodor hodor Olive hodor
              hodor
            </p>
          </div>
        </div>
      </div>
    );
  }
}
