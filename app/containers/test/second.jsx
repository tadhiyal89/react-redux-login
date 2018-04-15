import React from 'react';
const css = require('../../assets/css/custom.css');
import axios from 'axios';
import {loadState,saveState} from '../../utils/localStorage.js'
import { withRouter} from 'react-router-dom';
class Second extends React.Component {
   constructor(props){
	super(props);
	this.state = {
	name:'mohit',
  count:0
    };
  }
  handleChanges(type,event){
  	this.setState({name:"tadhiyal",count:this.state.count+1})
  	console.log("handle1-------"+this.state.count)
  	this.setState({name:"tadhiyal",count:this.state.count+1},()=>{console.log("------------inside of this"+this.state.count)})
    console.log("handle2-------"+this.state.count)
    
  } 
  componentWillMount(){
  this.setState({name:"kamini"})
  console.log(" second ---will mount "+  this.state.name)
  }
  componentDidMount(){
  console.log(" second ---Did mount===="+this.state.name)
  }
  componentWillUpdate(){
  console.log(" second ---WillUpdate ====="+this.state.count)
  }
  componentDidUpdate(){
  console.log(" second ---in componendidupte====="+this.state.count)
  }
   render() {
    console.log(" second --- I'm in render----"+this.state.count)
      return (
         React.createElement('div',{className:"classname"},'lol',
          React.createElement('span',"label",`Hello mohit  ${this.props.name}`)

          )
      );
   }
}
export default Second;
