
import './App.css';
import React,{Component} from 'react';
import Block from './Block';
import reactAddonsCssTransitionGroup from 'react-addons-css-transition-group';

import Dummyfront from './Dummyfront';
import Navbar from './Navbar';
import value from './EveryPage';

import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Sticky from './Stickyphoto';
let count =0;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       navbaranim: false,
    }
}





 
devclick=()=>{
  if(count===0){
   count=count +1;
   this.setState({navbaranim : true})
  }else{
    this.setState({navbaranim : false})
    return(count=0)
  }
  }
  render() { 
  return (
 
      <div className="App" >  
       <Navbar devclick={this.devclick} navbaranim={this.state.navbaranim} count={count}/>
     
       
        </div>

      );
  }

}

export default App;
