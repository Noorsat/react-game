import React from 'react';
import s from './PlayerChoice.module.css';
import rock from './rock.png';
import paper from './paper.png';
import scis from './scis.png';


const PlayerChoice = (props) => {
    return (
        <div className={s.PlayerChoice}>
            {props.choice === "rock" ? <img src={rock} alt={rock}/> : null}
            {props.choice === "paper" ? <img src={paper} alt={paper}/> : null}
            {props.choice === "scis" ? <img src={scis} alt={scis}/> : null}
        </div>
    );
};

export default PlayerChoice;