import React from 'react';
import s from './Header.module.css';

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <header className={s.Header}>
                <div className={s.header__wrapper}>
                    <div className={s.header__text}>
                        <p>Камень<br/> Ножницы<br/> Бумага</p>
                    </div>
                    <div className={s.header__scorebox}>
                        <div className={s.header__scorebox__title}>
                            Счет
                        </div>  
                        <div className={s.header__scorebox__score}>
                            {this.props.score}
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;