import React from 'react';
import { connect } from 'react-redux';
// import { Route, Switch, withRouter } from 'react-router-dom'

import './css/App.css';

import Searchbar from './components/searchbar.js';
import Heroes from './components/heroes.js';

const App = props => {
  console.log(props);

  return (
    <div className="App">
      <Searchbar />
      <br></br>
      <h1>{props.query}</h1>
      <br></br>
      <Heroes />
    </div>
)}

const mapStateToProps = state => {
  return { query: state.query }
}

export default connect(mapStateToProps, null)(App);
