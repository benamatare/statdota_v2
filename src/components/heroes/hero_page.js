import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Function for generating image link
import { hero_icon } from '../../dota_helpers/dota_functions.js'

// Import all children components to this
// import Banner from './banner.js'
// import Ability from './Ability.js'
// import Talent from './Talent.js'
// import Laning from './Laning.js'
// import Mathcup from './Mathcup.js'
// import Card from './Card.js'
// import Stats from './Stats.js'

const HeroPage = props => {
  //Component is passed props which is the main Hero object

  console.log(props);
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
