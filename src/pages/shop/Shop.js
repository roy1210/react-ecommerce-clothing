import React from 'react';
import CollectionsOverview from '../../components/collectionsOverview/CollectionsOverview';

import { selectCollections } from '../../redux/shop/shop.selector';

const Shop = () => {
  return (
    <div className='shop-page'>
      <CollectionsOverview />
    </div>
  );
};

export default Shop;
