import React, { Component } from 'react';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div className="about_container">
        <div>
          <h1> About </h1>
          <p> Lorem Dexter Morgan ipsum</p>
        </div>
        <div>
          <div className="left_box">
            <div className="about_text_box">
              <h2> 2009-2011 </h2>
              <h2> Our Humble Beginnings </h2>
              <p>
                Olive hodor Olive hodor hodorhodor Olive Olive hodor hodorhodor
                hodor hodor Olive hodor hodorhodor Olive Olive hodor hodorhodor
                hodor
              </p>
            </div>
            <div>
              <img
                className="about_img"
                src="https://blackrockdigital.github.io/startbootstrap-agency/img/about/1.jpg"
                alt="beginnings image"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="right_box">
            <div className="about_text_box">
              <h2> March 2011 </h2>
              <h2> An Agency is Born </h2>
              <p>
                Olive hodor hodor Olive hodor hodorhodor Olive Olive hodor hodorhodor
                hodor Olive hodor hodorhodor Olive Olive hodor hodorhodor
                hodor
              </p>
            </div>
            <div>
              <img
                className="about_img"
                src="https://blackrockdigital.github.io/startbootstrap-agency/img/about/2.jpg"
                alt="airplane image"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="left_box">
            <div className="about_text_box">
              <h2> December 2012 </h2>
              <h2> Transition to Full Service </h2>
              <p>
                Olive hodor Olive hodor hodor hodor Olive hodor hodorhodor Olive Olive hodor hodorhodor
                hodor hodor Olive Olive hodor hodorhodor
                hodor
              </p>
            </div>
            <div>
              <img
                className="about_img"
                src="https://blackrockdigital.github.io/startbootstrap-agency/img/about/3.jpg"
                alt="computer image"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="right_box">
            <div className="about_text_box">
              <h2> July 2014 </h2>
              <h2> Phase Two Expansion. </h2>
              <p>
                Olive hodor Olive hodor hodor Olive hodor hodorhodor Olive Olive hodor hodorhodor
                hodor hodorhodor Olive Olive hodor hodorhodor
                hodor
              </p>
            </div>
            <div>
              <img
                className="about_img"
                src="https://blackrockdigital.github.io/startbootstrap-agency/img/about/4.jpg"
                alt="mountain image"
              />
            </div>
          </div>
        </div>
        <div className='about_circle'>
            <p className='about_cir'> Be Part of Our Story</p>
        </div>
      </div>
    );
  }
}
