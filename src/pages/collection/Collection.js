import React from 'react';
import { connect } from 'react-redux';
import './Collection.scss';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionProduct from '../../components/collection-product/CollectionProduct';

const Collection = ({ collection }) => {
  // const Collection = ({ match }) => {
  // url 'shop/hats' >> 'hats'
  // console.log(match.params.collectionId);
  console.log(collection);

  const { title, items } = collection;

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionProduct key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  // this selector needs a args of the `state` because `selectCollection` is function that returns function
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);

/*
ownProps: Option props of `mapStateToProps`.
ownProps: props of components wrapping by `connect`. so `ownProps` === `Collection`

`Collection` component is wrapped by `Route` in `Shop`, so `Collection` is taking `match` props
So if `match`(url parameter) ==> `hats`, ownProps ===> `hats`
*/
