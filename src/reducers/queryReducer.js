//Default local state
var defaultState = {
  query: ""
};
// Exported local state
const queryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_QUERY':
       return {...state,
         query: action.payload
       };
    default:
      return state;
  }
};
export default queryReducer;
