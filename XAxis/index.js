import React from 'react';
import style from './XAxis.module.css';

const XAxis = ({ }) => {
    return <div className={style.xaxis_container}>
        <div className={style.xaxis}>
            <div className={style.axis_grid}><p>0</p></div>
            <div className={style.axis_grid}><p>10,000</p></div>
            <div className={style.axis_grid}><p>20,000</p></div>
            <div className={style.axis_grid}><p>30,000</p></div>
            <div className={style.axis_grid}><p>40,000</p></div>
            <div className={style.axis_grid}><p>50,000</p></div>
            <div className={style.axis_grid}><p>60,000</p></div>
            <div className={style.axis_grid}><p>70,000</p></div>
        </div>
    </div>
}

export default XAxis;