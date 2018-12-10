import React, { Component } from 'react';
import devImg from '../../assets/devImage.svg';

class Intro extends Component {
  render() {
    return (
      <div class="jumbotron jumbotron-fluid intro-jumbotron">
        <div class="container">
          <div className="row intro-section">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <h1 class="intro-heading">
                A freelance front end developer for digital products
              </h1>
              <p className="lead">
                I have a diverse set of skills, ranging from, HTML + CSS +
                JAVASCRIPT + REACT.JS all the way to node js. I can create
                interactive UIs, using component based architecture which is
                more scalable and reusable.
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <img className="intro-img img-fluid" src={devImg} alt="dev" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
