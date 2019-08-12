import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collectionsOverview/CollectionsOverview';
import Collection from '../collection/Collection';

const Shop = ({ match }) => {
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />

      {/* collectionId: parameter in url */}
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default Shop;
