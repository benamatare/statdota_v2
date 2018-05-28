// API Docs
// https://docs.stratz.com/#operation/ApiV1HeroByIdPurchasePatternGet
const BASE_URL = `https://api.stratz.com/api/v1/`

export function stratz_heroes(){
  return (dispatch) => {
    return fetch(BASE_URL + `Hero`)
    .then(response => response.json())
    .then(json => dispatch({ type: 'SET_HEROES_STRATZ', payload: json}))
  }
};
