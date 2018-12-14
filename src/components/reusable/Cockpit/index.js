import React from 'react';

const Cockpit = props => {
  const { title, description } = props;
  return (
    <React.Fragment>
      <div className="Cockpit-Title">{title}</div>
      <div className="Cockpit-Description">{description}</div>
    </React.Fragment>
  );
};

export default Cockpit;
