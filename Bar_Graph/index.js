import React from 'react';
import style from './Bar_Graph.module.css';
import Legend from '../Legend'
import XAxis from '../XAxis'
import SpeechBubble from '../SpeechBubble'

const BarGraph = ({ }) => {
    return <div className={style.graph_container}>
        <div>
            <Legend />
            <div className={style.graph_bars}>
                <div className={style.graph_align}>
                    <div className={style.bar_one}></div>
                    <SpeechBubble className={style.graph_bubble}/>
                </div>
                <div className={style.bar_two}></div>
            </div>
            <XAxis />
        </div>
    </div>
}

export default BarGraph;