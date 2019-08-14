import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],

  // Convert from object to array. (to use `.map` in `collectionsOverview`)
  // Object.keys: Convert keys to array
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);
// Curried function. This is function returns function
// collectionUrlParam: Get from URL
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    // Look for state of `collections` >> state.collections.ValueOfCollectionUrlParam
    collections => (collections ? collections[collectionUrlParam] : null)
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  //!!"" : false, !!{}: true
  shop => !!shop.collections
);

/*

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};

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
  */
