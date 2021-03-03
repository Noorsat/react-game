import React from 'react';
import s from './Paper.module.css';
import paper from './paper.png';

const Paper = (props) => {
    return (
        <div className={s.list__item}>
            <img src={paper} alt="paper" onClick={props.onClickHandler}/>
        </div>
    )
};

export default Paper;