//Default local state
var defaultState = {
  stratz: null,
  open_dota: null,
};
// Exported local state
const heroesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_HEROES_STRATZ':
        return {...state,
          stratz: action.payload
        };
      case 'SET_HEROES_OPENDOTA':
        return {...state,
          open_dota: action.payload
        };
    default:
      return state;
  }
};

export default heroesReducer;
