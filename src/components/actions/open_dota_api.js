// API Docs
// https://docs.opendota.com/
const BASE_URL = `https://api.opendota.com/api/`

export function open_dota_heroes(){
  return (dispatch) => {
    return fetch(BASE_URL + `heroes`)
    .then(response => response.json())
    .then(json => dispatch({ type: 'SET_HEROES_OPENDOTA', payload: json}))
  }
}
