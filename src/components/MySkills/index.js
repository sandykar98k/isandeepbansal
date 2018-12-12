import React from 'react';
import htmlImg from '../../assets/html.svg';
import javascriptImg from '../../assets/javascript.svg';
import reactImg from '../../assets/reactjs.png';
const MySkills = () => {
  return (
    <section className="my-skills-sec">
      <div className="container">
        <h2 className="my-skills-title">the skills</h2>
        <p className="my-skills-description">
          I can build beautiful web apps that looks amazing on every screen and
          take your business to next level.
        </p>
        <div className="row my-skills-body">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card card-body my-skills-card">
              <div className="my-skills-card-header">
                <div className="my-skills-card-header-left">
                  <img src={htmlImg} className="img-fluid" alt="html" />
                </div>
                <div className="my-skills-card-header-right">
                  <h4>HTML, CSS</h4>
                  <span>1 Years, 10 Projects</span>
                </div>
              </div>
              <div className="my-skills-card-body">
                If i have to rate myslef in HTML, CSS i will rate 9 out of 10
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card card-body my-skills-card">
              <div className="my-skills-card-header">
                <div className="my-skills-card-header-left">
                  <img src={reactImg} className="img-fluid" alt="react" />
                </div>
                <div className="my-skills-card-header-right">
                  <h4>ReactJS</h4>
                  <span>1 Years, 4 Projects</span>
                </div>
              </div>
              <div className="my-skills-card-body">
                If i have to rate myslef in ReactJS i will rate 8 out of 10
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card card-body my-skills-card">
              <div className="my-skills-card-header">
                <div className="my-skills-card-header-left">
                  <img
                    src={javascriptImg}
                    className="img-fluid"
                    alt="javascript"
                  />
                </div>
                <div className="my-skills-card-header-right">
                  <h4>javascript</h4>
                  <span>1 Years, 8 Projects</span>
                </div>
              </div>
              <div className="my-skills-card-body">
                If i have to rate myslef in JavaScript i will rate 8 out of 10
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
