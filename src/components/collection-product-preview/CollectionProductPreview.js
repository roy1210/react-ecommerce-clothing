// Changed name from CollectionPreview to CollectionProductPreview due to build error when deploying

import React from 'react';
import CollectionProduct from '../collection-product/CollectionProduct';
import './CollectionProductPreview.scss';

const CollectionProductPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionProduct key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionProductPreview;
