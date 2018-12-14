import React from 'react';
import htmlImg from '../../assets/html.svg';
import javascriptImg from '../../assets/javascript.svg';
import reactImg from '../../assets/reactjs.png';
import Cockpit from '../reusable/Cockpit';
import SkillCard from '../reusable/SkillCard';

const MySkills = () => {
  return (
    <section className="My-Skills-Sec">
      <div className="container">
        <Cockpit
          title="the skills"
          description=" I can build beautiful web apps that looks amazing on every screen and
          take your business to next level."
        />
        <div className="row My-Skills-Body">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <SkillCard
              imgUrl={htmlImg}
              title="HTML, CSS"
              subTitle="1 Years, 10 Projects"
              description="If i have to rate myslef in HTML, CSS i will rate 9 out of 10"
            />
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <SkillCard
              imgUrl={reactImg}
              title="ReactJS"
              subTitle="1 Years, 4 Projects"
              description="If i have to rate myslef in ReactJS i will rate 8 out of 10"
            />
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <SkillCard
              imgUrl={javascriptImg}
              title="javascript"
              subTitle="1 Years, 8 Projects"
              description="If i have to rate myslef in JavaScript i will rate 8 out of 10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
