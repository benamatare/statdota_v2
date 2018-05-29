import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { hero_icon } from '../dota_helpers/dota_functions.js'

const HeroIcon = props => {
  // console.log(props.id);
  return (
      <img
        onClick={props.onClick}
        id={props.id} alt={props.hero.uri}
        src={hero_icon(props.hero.uri)}/>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ hero_icon: hero_icon }, dispatch)
};

export default connect (mapDispatchToProps, null)(HeroIcon);
