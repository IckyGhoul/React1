import React, { Component } from 'react';
import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'
class App extends Component {
  
  state ={
    username:'IckyGhoul'
  }
  switchUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    const style = {
      App:{
        textAlign:'center',
        border:'solid 2px black',
        background:'#eee'
      },
      header:{
        color:'red'
      }
    
    }
    return (
      <div className="App" style={style.App}>
      <h1 style={style.header}>First React Assignment</h1>
          <UserInput  username = {this.state.username}  switch={this.switchUsernameHandler} />
          <UserOutput username = {this.state.username} />
          <UserOutput />
        
      </div>
    );
  }
}

export default App;
