// Changed name from CollectionPreview to CollectionProductPreview due to build error when deploying

import React from 'react';
import CollectionProduct from '../collection-product/CollectionProduct';
import './CollectionProductPreview.scss';

const CollectionProductPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          // Only show 4 item which index# 0~3
          .filter((item, i) => i < 4)
          // .map(({ id, ...otherItemProps }) => (
          // <CollectionItem key={id} {...otherItemProps} />
          .map(item => (
            <CollectionProduct key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionProductPreview;
