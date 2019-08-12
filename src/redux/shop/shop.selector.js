import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// Curried function. This is function returns function
// collectionUrlParam: Get from URL
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    // find: returns `true`
    // Look for state of `collections` >> state.collections.xxx
    collections =>
      collections.find(
        collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
      )
  );
