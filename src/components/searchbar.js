import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setQuery } from '../actions/actions.js'

class Searchbar extends Component {
  constructor(props){
    super(props);
      this.state = {
        query: ""
      }
  }

  setStateQuery = e => {
    this.setState({ query: e.target.value })
  }

  setReduxQuery = e => {
    this.props.setQuery(this.state.query)
    e.preventDefault()
    this.setState({
      query: ""
    })
  }

  render() {
   return(
     <form onSubmit={this.setReduxQuery}>
       <input
         value={this.state.query}
         placeholder="Search for..."
         onChange={this.setStateQuery}
       />
     </form>
  )}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setQuery: setQuery }, dispatch)
}

export default connect(null, mapDispatchToProps)(Searchbar);
