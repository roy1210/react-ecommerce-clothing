import React from 'react';
import './Menu-item.scss';

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    {/* To scale for only background image */}
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
