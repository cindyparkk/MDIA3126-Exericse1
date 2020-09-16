import React from 'react';
import style from './Header.module.css';

const Header = ({ }) => {
    return <div>
        <h1 className={style.myhead}>Average Income</h1>
        <p className={style.head_p}>The amount of money an individual, family, or household makes in Canada.</p>
    </div>
}

export default Header;