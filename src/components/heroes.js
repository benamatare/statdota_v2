import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeroIcon from './hero_icon.js';
import HeroPage from './hero_page.js';

// Rename into Heroes controller or something, need to move everythign into seperate folders kappa
class Heroes extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggle_hero_list_render: false,
      toggle_hero_page_render: false,
      hero_name: null
    }
  }

  toggleRender = () => {
    this.setState({
      toggle_hero_list_render: !this.state.toggle_hero_list_render,
      toggle_hero_page_render: false,
      hero_name: null,
    })
  }
  toggleClicked = e => {
    console.log('Setting local state to this int >>',e.target.id);
    e.preventDefault();
    this.setState({
      toggle_hero_page_render: !this.state.toggle_hero_page_render,
      toggle_hero_list_render: false,
      hero_name: e.target.id

    })
  }

   renderHeroList = () => {
     return this.props.stratz.map(hero => {
      return <HeroIcon id={hero.name} onClick={this.toggleClicked} key={hero.name} hero={hero}/>
    })
  }

  findHero = () => {
    return this.props.stratz.find(hero => {
      return hero.name === this.state.hero_name
    })
  }

  renderHeroPage = () => {
    return <HeroPage id={this.state.hero_name} hero={this.findHero()}/>
  }

render(){
console.log('Render hit!');
  return(
      <div>
        <button onClick={this.toggleRender}>RENDER HERO LIST </button><br/>
        {this.state.toggle_hero_list_render ? this.renderHeroList() : null}
        {this.state.toggle_hero_page_render && this.state.hero_name ? this.renderHeroPage() : null}
      </div>
  )}
};

const mapStateToProps = state => {
  return {stratz: state.hero_data.stratz, open_dota: state.hero_data.open_dota}
};

export default connect(mapStateToProps, null)(Heroes);
