// State as we initiate the app
var defaultState = {
  counter: 0,
  query: "",
};

// Reducer function, with actions and state changes
export function rootReducer (state = defaultState, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
     return {...state,
       counter: state.counter += 1
    }
    case 'DECREASE_COUNT':
     return {...state,
       counter: state.counter -= 1
     }
    case 'CLEAR_QUERY':
     return {...state,
       query: ""
     }
    case 'SET_QUERY':
      return {...state,
        query: action.payload
      }
    default:
     return state;
  }
}
