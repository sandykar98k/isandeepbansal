import React from 'react';

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
              <h4>HTML, CSS</h4>
              <span>1 Years, 10 Projects</span>
              <br />
              <span>
                If i have to rate myslef in HTML, CSS i will rate 9 out of 10
              </span>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card card-body my-skills-card">
              <h4>JavaScript</h4>
              <span>1 Years, 10 Projects</span>
              <br />
              <span>
                If i have to rate myslef in JavaScript i will rate out 8 of 10
              </span>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card card-body my-skills-card">
              <h4>ReactJS</h4>
              <span>1 Years, 4 Projects</span>
              <br />
              <span>
                If i have to rate myslef in ReactJS i will rate 8 out of 10
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
