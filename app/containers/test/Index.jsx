import React from 'react';
const css = require('../../assets/css/custom.css');
import axios from 'axios';
import {loadState,saveState} from '../../utils/localStorage.js'
import { withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {increment,decrement} from './actions.js'
class Test extends React.Component {
   constructor(props){
	super(props);
	this.state = {
	name:'mohit',
  count:0
    };
  }
  handleChangesInc(type,event){
  	this.props.incrementFunc()
  } 
  handleChangeDec(){
	this.props.decrementFunc()
  }
   render() {
      return (
         <div>
            <button onClick={this.handleChangesInc.bind(this)}>test{this.state.count}</button>
            <button onClick={this.handleChangeDec.bind(this)}>dec</button>
            <label><b>Counter is </b>{this.props.counter}</label>
		</div>
      );
   }
}
let mapStateToProps = (state)=>{
	return {counter:state.reducer2.counter}
}
let mapDispatchToProps = (dispatch)=>{
	return ({incrementFunc:()=>{dispatch(increment())},decrementFunc:()=>{dispatch(decrement())}})
}
export default connect(mapStateToProps,mapDispatchToProps)(Test);
