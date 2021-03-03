import React from 'react';
import BotChoice from './BotChoice/BotChoice';
import s from './Game.module.css';
import Paper from './Paper/Paper';
import PlayerChoice from './PlayerChoice/PlayerChoice';
import Scissors from './Scissors/Scissors';
import Stone from './Stone/Stone';

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            myChoice:"",
            botChoice:"",   
            winner:"",
            score:props.score
        }
    };
    
    playerChoiceHandler = (event) => {
        const variants = ['rock','paper','scis'];
        const botRandom = variants[Math.floor(Math.random()*variants.length)];
        const playerChoice = event.target.alt;
        if (playerChoice === "rock" && botRandom === "scis" || playerChoice === "paper" && botRandom === "rock" || playerChoice === "scis" && botRandom === "paper"){
            this.setState({
                myChoice:playerChoice,
                botChoice:botRandom,
                winner:"player"
            })
            return this.props.score();
        }else if (playerChoice === "rock" && botRandom === "rock" || playerChoice === "paper" && botRandom === "paper" || playerChoice === "scis" && botRandom === "scis"){
            this.setState({
                myChoice:playerChoice,
                botChoice:botRandom,
                winner:"draw"
            }) 
        };
        this.setState({
            myChoice:playerChoice,
            botChoice:botRandom,
            winner:"bot"
        })
    }   
    render(){
        return (
            <section className={s.Game}>
                <div className={s.game__wrapper}>
                    <div className={s.my__choice}>
                        Мой выбор:             
                        {this.state.myChoice !== "" ? <PlayerChoice choice={this.state.myChoice}/> : null}           
                    </div>
                    {this.state.winner === "draw" ? <h1 className={s.result}>Draw</h1> : ""}
                    {this.state.winner === "player" ? <h1 className={s.result}>Player is winner</h1> : ""}
                    {this.state.winner === "bot" ? <h1 className={s.result}>Bot is winner</h1> : ""}
                    <div className={s.bot__choice}>
                        Выбор бота:
                        {this.state.botChoice !== "" ? <BotChoice choice={this.state.botChoice}/> : null}
                    </div>
                </div>
                <hr></hr>
                <div className={s.list}>
                    <Paper onClickHandler={this.playerChoiceHandler}/>
                    <Scissors onClickHandler={this.playerChoiceHandler}/>
                    <Stone onClickHandler={this.playerChoiceHandler}/>
                </div>
            </section>
        );
    }
}

export default Game;