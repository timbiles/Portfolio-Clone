import React, { Component } from 'react';
import './Portfolio.css';

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio_container">
        <div className="title">
          <h1>Portfolio</h1>
          <p className="port_text">Walter White Lorem ipsum</p>
        </div>
        <div className="photo_boxes">
          <div className="img_boxes">
            <img
              src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/01-thumbnail.jpg"
              alt="Threads image"
              className='port_image'
            />
            <h2>Threads</h2>
            <p className="port_text">Illustration</p>
          </div>
          <div className="img_boxes">
            <img
              src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/02-thumbnail.jpg"
              alt="Explore Image"
              className='port_image'
            />
            <h2>Explore</h2>
            <p className="port_text">Graphic Design</p>
          </div>
          <div className="img_boxes">
            <img
              src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/03-thumbnail.jpg"
              alt="Finish Image"
              className='port_image'
            />
            <h2>Finish</h2>
            <p className="port_text">Identity</p>
          </div>
          <div className="img_boxes">
            <img
              src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/04-thumbnail.jpg"
              alt="Lines Image"
              className='port_image'
            />
            <h2>Lines</h2>
            <p className="port_text">Branding</p>
          </div>
          <div className="img_boxes">
            <img
              src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/05-thumbnail.jpg"
              alt="Southwest Image"
              className='port_image'
            />
            <h2>Southwest</h2>
            <p className="port_text">Website Design</p>
          </div>
          <div className="img_boxes">
            <img
              src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/06-thumbnail.jpg"
              alt="Window Image"
              className='port_image'
            />
            <h2>Window</h2>
            <p className="port_text">Photography</p>
          </div>
        </div>
      </div>
    );
  }
}
