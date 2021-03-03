import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Game from './components/Game/Game';

class App extends React.Component{
  state = {
    score:0
  }  
  scoreChanger = () => {
    this.setState({
      score:this.state.score+1
    })
    console.log(this.state.score);
  };

  render(){
  return (
    <div className="App">
        <Header score = {this.state.score}/>
        <Game score={this.scoreChanger}/>
    </div>
  );
  }
}

export default App;
