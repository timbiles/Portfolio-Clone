import React, { Component } from 'react';
import './Team.css';

export default class Team extends Component {
  render() {
    return (
      <div className='team_container'>
        <div>
          <h1>Our Amazing Team</h1>
          <h3>Lorem Don Draper ipsum ipsum</h3>
        </div>
        <div className='team_names'>
          <div className='team_boxes'>
            <img
              className="team_img"
              src="https://blackrockdigital.github.io/startbootstrap-agency/img/team/1.jpg"
              alt=""
            />
            <h3>Kay Garland</h3>
            <p>Lead Designer</p>
            <div>
                <img src="" alt=""/>
            </div>
          </div>
          <div className='team_boxes'>
            <img
              className="team_img"
              src="https://blackrockdigital.github.io/startbootstrap-agency/img/team/2.jpg"
              alt=""
            />
            <h3>Larry Parker</h3>
            <p>Lead Marketer</p>
            
            <div>
              <div />
              <div />
              <div />
            </div>
          </div>
          <div className='team_boxes'>
            <img
              className="team_img"
              src="https://www.scvanguard.org/wp-content/uploads/biles.png"
              alt=""
            />
            <h3>Tim Biles</h3>
            <p>Lead Developer</p>
            
            <div>
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
        <div>
          <p>Olive hodor hodor hodrhodorhdor olive hodor</p>
        </div>
      </div>
    );
  }
}
