import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { hero_icon } from '../../dota_helpers/dota_functions.js'

const HeroIcon = props => {
  // console.log(props);
  return (<span id={props.id}>
      <img
        onClick={props.onClick}
        id={props.hero.id} alt={props.id}
        src={hero_icon(props.hero.uri)}/>
  </span>)
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ hero_icon: hero_icon }, dispatch)
};

export default connect (mapDispatchToProps, null)(HeroIcon);
