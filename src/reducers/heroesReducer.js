//Default local state
var defaultState = {
  stratz: {
    heroes: null,
    hero: {
      data: null,
      lane: null,
      talent: null,
      matchup: null
    },
  },
  open_dota: {
    heroes: null,

    }
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
          stratz: {...state.stratz,
            heroes: temp_arr
          }
        };
      case 'SET_HEROES_OPENDOTA':
        return {...state,
          open_dota: {...state.open_dota,
            heroes: action.payload
          }
        };
      case 'SET_HERO_STRATZ':
        return {...state,
          stratz: {...state.stratz,
            hero: {...state.hero,
              data: action.payload
            },
          },
        };
      case 'SET_HERO_LANE_STRATZ':
        return {...state,
          stratz: {...state.stratz,
            hero: {...state.hero,
              lane: action.payload
            },
          },
        };
      case 'SET_HERO_TALENT_STRATZ':
        return {...state,
          stratz: {...state.stratz,
            hero: {...state.hero,
              talent: action.payload
            },
          }
        };
      case 'SET_HERO_MATCHUP_STRATZ':
        return {...state,
          stratz: {...state.stratz,
            hero: {...state.hero,
              matchup: action.payload
            },
          },
        };
    default:
      return state;
  }
};

export default heroesReducer;
