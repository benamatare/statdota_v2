import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { stratz_heroes } from './actions/stratz_api.js'
import { open_dota_heroes } from './actions/open_dota_api.js'


import { Button } from 'semantic-ui-react'

// want tthe 2 fetch actions
const Heroes = props => {
  console.log(props);
  const stratz = () => {
    props.stratz_heroes()
  }

  // const open_dota = () => {
  //   props.open_dota_heroes()
  // }

  return(
    <div>
    <Button value="stratz" onClick={ stratz }>Stratz</Button>
    </div>
)}


const mapStateToProps = state => {
  return {stratz: state.hero_data.stratz, open_dota: state.hero_data.open_dota}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ stratz_heroes: stratz_heroes, open_dota_heroes: open_dota_heroes }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);
