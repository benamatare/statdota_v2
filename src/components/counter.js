import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from 'semantic-ui-react'

import { increaseCount, decreaseCount } from '../actions.js'
// Functions that handle Redux state changes

const Counter = props => {
  const handleClickLogic = e => {
   if (e.target.value === "+") {
     props.increaseCount()
   } else if (e.target.value === "-") {
     props.decreaseCount()
   }
  }

  return (
   <div>
    <h1> { props.counter } </h1>
     <Button value="-" onClick={ handleClickLogic }> - </Button>
     <Button value="+" onClick={ handleClickLogic }> + </Button>
   </div>
)}

  const mapStateToProps = state => {
    return { counter: state.counter }
  }

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({ increaseCount: increaseCount, decreaseCount: decreaseCount}, dispatch)
  }
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
