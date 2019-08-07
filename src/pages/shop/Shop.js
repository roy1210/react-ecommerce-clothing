import React, { Component } from 'react';
import SHOP_DATA from './Shop.data';
import CollectionPreview from '../../components/collectionPreview/CollectionPreview';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          // only `key` is not same property name in key value pair. So key cannot include in `{...otherCollectionProps}`
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
export default Shop;
