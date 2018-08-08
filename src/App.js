import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
      super(props);
      this.state={
          displayValue:''
      };
  }
  render(){
      return(
          <div className="calculator">
              <h1>CALCULATOR</h1>
              <input placeholder={this.state.displayValue} type="text"/>
              <div id="error">&nbsp;</div>
              <Keypad callBackFromButton={this.myCallback}/>
          </div>
      );
  }
  myCallback=(buttonValue)=>{
      {document.getElementById("error").innerHTML= "&nbsp"}
      if(buttonValue === '='){
          try{
              var result= String(eval(this.state.displayValue));
              this.setState({
                  displayValue:result
              });
          }
          catch(e){

          {
              console.log(e)
              document.getElementById("error").innerText= "Invalid Expression"}
          }             
      }
      else if(buttonValue === 'CLR'){
          this.setState({
              displayValue: ''
          });     
      }
      else if(buttonValue === 'DEL'){
          this.setState(prevState =>({
              displayValue: prevState.displayValue.slice(0,-1)
          }));     
      }
      else{
          var text= buttonValue;
          this.setState(prevState => ({
              displayValue: prevState.displayValue.concat(text)
          }));
      }
  }
}
class Keypad extends React.Component{
  render(){
      return(
          <div className="keypad">
              {
                  ['DEL','CLR'].map((item)=>
                  <button value={item} onClick={() => {this.props.callBackFromButton(item)}}>{item}</button>
                  )
              }
              <button className="bigButton" value="=" onClick={() => {this.props.callBackFromButton('=')}}>=</button>
              {
                  [7,8,9,'*',4,5,6,'-',1,2,3,'+',0,'.','%','/'].map((item)=>
                  <button value={item} onClick={() => {this.props.callBackFromButton(item)}}>{item}</button>
                  )
              }
          </div>);
  }
}

export default App;
