import React from 'react';
import style from './Legend.module.css'

const Legend = ({}) => {
    return <div className={style.graph_legend}>
        <div className={style.legend_items}>
            <div className={style.square_one}></div>
            <p>Average Income for the Region</p>
        </div>
        <div className={style.legend_items}>
            <div className={style.square_two}></div>
            <p>Average Income for the Region</p>
        </div>
    </div>
}

export default Legend;