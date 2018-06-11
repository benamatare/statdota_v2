import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { Router, Route, Link, IndexRoute, Switch} from 'react-router-dom'
// import { Route, NavLink, HashRouter } from 'react-router-dom';
import './css/App.css';
import Searchbar from './components/searchbar.js';
import Heroes from './components/heroes.js';
import LandingPage from './components/landing_page.js';
import Header from './components/header.js';
// API Calls
import { fetch_heroes } from './actions/stratz_api.js';
import { open_dota_heroes } from './actions/open_dota_api.js';

class App extends Component {
  componentDidMount(){
    this.props.stratz_heroes()
    // set a flag called first load?
    // Set this to another things
  };
  // When the App page loads, pre-load all the Heroes data to streamline the rendering of the heroes page
  // Did not want to make the API call on the THAT component load

render(){
  console.log(this.props);
  return (
    <div className="App">
      <Header />
      <LandingPage />
      {/* {!this.props.search_data.query ? <Heroes /> : null} */}
      <h1>{this.props.search_data.query}</h1>
    </div>
  )}
}

const mapStateToProps = state => {
  return { search_data: state.search_data }
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ stratz_heroes: fetch_heroes, open_dota_heroes: open_dota_heroes }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
