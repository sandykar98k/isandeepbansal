import React from 'react';

const SkillCard = props => {
  const { imgUrl, title, subTitle, description } = props;
  return (
    <div className="card card-body Skill-Card">
      <div className="Skill-Card-Header">
        <div className="Skill-Card-Header-Left">
          <img src={imgUrl} className="img-fluid" alt="html" />
        </div>
        <div className="Skill-Card-Header-Right">
          <h4>{title}</h4>
          <span>{subTitle}</span>
        </div>
      </div>
      <div className="Skill-Card-Body">{description}</div>
    </div>
  );
};
export default SkillCard;
