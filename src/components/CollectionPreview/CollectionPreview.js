import React from 'react';
import CollectionItem from '../collectionItem/CollectionItem';
import './CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          // Only show 4 item which index# 0~3
          .filter((item, i) => i > 4)
          // .map(({ id, ...otherItemProps }) => (
          // <CollectionItem key={id} {...otherItemProps} />
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
