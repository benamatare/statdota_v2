import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { hero_icon } from '../dota_helpers/dota_functions.js'

// antimage_icon.png
const HeroPage = props => {
  console.log(props.hero);
  return (<div>
    <h1> HERO ID --> {props.hero.displayName} </h1>
    <h4>{props.hero.hype}</h4>
    <h4>{props.hero.bio}</h4>
  </div>)
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ hero_icon: hero_icon }, dispatch)
};

export default connect (mapDispatchToProps, null)(HeroPage);
