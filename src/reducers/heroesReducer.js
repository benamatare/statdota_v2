//Default local state
var defaultState = {
  stratz: null,
  open_dota: null
};


// Exported local state
const heroesReducer = (state = defaultState, action) => {
  switch (action.type) {
    // Comes back as an object, have to iterate over it to push into an array and push that array into Redux State
    case 'SET_HEROES_STRATZ':
    var temp_arr = [];
    Object.keys(action.payload).forEach( k => {
      temp_arr.push(action.payload[k])
    });
        return {...state,
          stratz: temp_arr
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
