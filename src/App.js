import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { Route, Switch, withRouter } from 'react-router-dom'

import './css/App.css';

import Searchbar from './components/searchbar.js';

import Heroes from './components/heroes.js';
import { stratz_heroes } from './actions/stratz_api.js';
import { open_dota_heroes } from './actions/open_dota_api.js';

class App extends Component {
  componentDidMount(){
    this.props.stratz_heroes()
  };
  // When the App page loads, pre-load all the Heroes data to streamline the rendering of the heroes page
  // Did not want to make the API call on the THAT component load

render(){
  // console.log(this.props);
  return (
    <div className="App">
        <Searchbar />
      <br></br>
      <h1>{this.props.search_data.query}</h1>
      <br></br>
      {!this.props.search_data.query ? <Heroes /> : null}
    </div>
  )}
}

const mapStateToProps = state => {
  return { search_data: state.search_data }
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ stratz_heroes: stratz_heroes, open_dota_heroes: open_dota_heroes }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
