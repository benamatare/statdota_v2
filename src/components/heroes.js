import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { Link, Route } from 'react-router-dom';

// Sub-Components
import HeroIcon from './heroes/hero_icon.js';
import HeroPage from './heroes/hero_page.js';

import { fetch_hero, fetch_hero_lane ,fetch_hero_talent , fetch_hero_matchup } from '../actions/stratz_api.js';

// Rename into Heroes controller or something, need to move everythign into seperate folders kappa
class Heroes extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggle_hero_list_render: false,
      toggle_hero_page_render: false,
      selected_hero_name: null,
    }
  }

  toggleRender = () => {
    this.setState({
      toggle_hero_list_render: !this.state.toggle_hero_list_render,
      toggle_hero_page_render: false,
      selected_hero_name: null,
    })
  }
  heroIconClickHandler = e => {
    e.preventDefault();
    this.setState({
      toggle_hero_page_render: !this.state.toggle_hero_page_render,
      toggle_hero_list_render: false,
      selected_hero_name: e.target.parentNode.id
    })
    this.props.fetch_hero(e.target.id);
    this.props.fetch_hero_lane(e.target.id);
    this.props.fetch_hero_talent(e.target.id);
    this.props.fetch_hero_matchup(e.target.id);
  }

   renderHeroList = () => {
     return this.props.stratz.heroes.map(hero => {
      return <HeroIcon id={hero.name} onClick={this.heroIconClickHandler} key={hero.name} hero={hero}/>
    })
  }

  findHero = () => {
    return this.props.stratz.heroes.find(hero => {
      return hero.name === this.state.selected_hero_name
    })
  }

  renderHeroPage = () => {
    return <HeroPage id={this.state.selected_hero_name} hero={this.findHero()}/>
  }

render(){
  return(
      <div>
        <button onClick={this.toggleRender}>RENDER HERO LIST </button>
        {/*  */}
        {this.state.toggle_hero_list_render ? this.renderHeroList() : null}
        {/*  */}
        {this.state.toggle_hero_page_render && this.state.selected_hero_name ? this.renderHeroPage() : null}
      </div>
  )}
};

const mapStateToProps = state => {
  return {stratz: state.hero_data.stratz, open_dota: state.hero_data.open_dota}
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetch_hero: fetch_hero, fetch_hero_lane: fetch_hero_lane, fetch_hero_talent: fetch_hero_talent, fetch_hero_matchup: fetch_hero_matchup }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);
