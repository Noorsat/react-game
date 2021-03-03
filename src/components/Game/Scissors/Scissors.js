import React from 'react';
import s from './Scissors.module.css';
import scis from './scis.png';

const Scissors = (props) => {
    return (
        <div className={s.list__item}>
            <img src={scis} alt="scis" onClick={props.onClickHandler}/>
        </div>
    )
};

export default Scissors;