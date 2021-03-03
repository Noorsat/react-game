import React from 'react';
import s from './Stone.module.css';
import rock from './rock.png';

const Stone = (props) => {
    return (
        <div className={s.list__item}>
            <img src={rock} alt="rock" onClick={props.onClickHandler}/>
        </div>
    )
};

export default Stone;