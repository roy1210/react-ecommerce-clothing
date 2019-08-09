/*
reducer: function
type (case): action name
payload: update state
default: `return state` if incoming action type is not related
*/

// default state
const INITIAL_STATE = {
  currentUser: null
};

// state: 1. previous/current state 2. default value(ES6)
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
