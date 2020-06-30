import React from 'react';
import './PageTitle.css';
const PageTitle = ({ title }) => {
  return (
    <div className='PageTitle'>
      <div className='background'></div>
      <h1 data-text={title}>{title}</h1>
    </div>
  );
};

export default PageTitle;
