import React from 'react';

const ProjectCard = props => {
  const { imgUrl, cardName } = props;
  return (
    <div className="card card-body shadow-md Project-Card">
      <img src={imgUrl} className="img-fluid" alt={imgUrl} />
      <h5 className="Project-Card-Name"> {cardName} </h5>
    </div>
  );
};

export default ProjectCard;
