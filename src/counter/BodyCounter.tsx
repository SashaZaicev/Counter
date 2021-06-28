import React from 'react';
import s from './StyleCounter.module.css'

type BodyCounterPropsType = {
    count: number;
    maxValue: string
}

export const BodyCounter: React.FC<BodyCounterPropsType> = ({count, maxValue}) => {
    return (
        <div className={`${s.bodyCounter} ${count === +maxValue ? s.colorCount : ''}`}>
            {count}
        </div>
    )
}