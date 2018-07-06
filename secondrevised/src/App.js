import React, { Component } from 'react';
import './App.css';
import Validation from './components/Validation'
import Character from './components/Character'

class App extends Component {
  state = {
    input:''
  }

  inputHandler = (event) =>{
    this.setState({
      input: event.target.value
    })
  }

  deleteHandler = (index) =>{
    const inputArray = this.state.input.split('')
    inputArray.splice(index,1)
    const update = inputArray.join('')
    this.setState({
      input:update
    })
    
   
  }

  

  render() {
    let inputArray = this.state.input.split('')
    let letterContainer
    letterContainer = (
      <div>
        {inputArray.map((letter,index)=>{
         
         return <Character delete={() =>this.deleteHandler(index)} key ={index} letter = {letter} />
        })}
      </div>
    );


    return (
      <div className="App">
        <h1>Second React </h1>
        <input onChange={this.inputHandler} type='text'/>
        <p>{this.state.input}</p>
        <Validation text={this.state.input} value = {this.state.input}/>
        {letterContainer}
        
      </div>
    );
  }
}

export default App;
