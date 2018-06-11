// API Docs
// https://docs.stratz.com/#operation/ApiV1HeroByIdPurchasePatternGet
const BASE_URL = `https://api.stratz.com/api/v1/`

// Fetches ALL Heroes
export function fetch_heroes(){
  return (dispatch) => {
    return fetch(BASE_URL + `Hero`)
    .then(response => response.json())
    .then(json => dispatch({ type: 'SET_HEROES_STRATZ', payload: json}))
  }
};

// Fetches SINGLE hero
export function fetch_hero(hero_id){
  return (dispatch) => {
    return fetch(BASE_URL + `hero/${hero_id}`)
    .then(response => response.json())
    .then(json => dispatch({ type: 'SET_HERO_STRATZ', payload: json}))
  }
};
// Fetches for Lane
export function fetch_hero_lane(hero_id){
  return (dispatch) => {
    return fetch(BASE_URL + `hero/${hero_id}/lane`)
    .then(response => response.json())
    .then(json => dispatch({ type: 'SET_HERO_LANE_STRATZ', payload: json}))
  }
};
// Fetches for Talents
export function fetch_hero_talent(hero_id){
  return (dispatch) => {
    return fetch(BASE_URL + `hero/${hero_id}/talent`)
    .then(response => response.json())
    .then(json => dispatch({ type: 'SET_HERO_TALENT_STRATZ', payload: json}))
  }
};
// Fetches for Matchups
export function fetch_hero_matchup(hero_id){
  return (dispatch) => {
    return fetch(BASE_URL + `hero/${hero_id}/matchup`)
    .then(response => response.json())
    .then(json => dispatch({ type: 'SET_HERO_MATCHUP_STRATZ', payload: json}))
  }
};


export const getStream = stream => {
  return dispatch => {
    type: 'GETSTREAM', payload: stream
  }
}
