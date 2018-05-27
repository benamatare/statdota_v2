import React from 'react';
import { connect } from 'react-redux';

import './css/App.css';

import Counter from './components/counter.js';
import Searchbar from './components/searchbar.js';

const App = props => {
    return (
      <div className="App">
        <h1> This is a counter </h1>
        <Counter />
        <h1>{props.query}</h1>
        <br></br>
        <Searchbar />
      </div>
)}

const mapStateToProps = state => {
  return { query: state.query }
}


export default connect(mapStateToProps, null)(App);
