import React, {ChangeEvent} from 'react';
import s from './StyleCounter.module.css'

type ButtonCounterPropsType = {
    name: string;
    actionCount: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    disabled: boolean
}
export const ButtonCounter: React.FC<ButtonCounterPropsType>
    = ({
           name,
           actionCount,
           disabled
       }) => {
    return (
        <button className={s.button}
                disabled={disabled}
                onClick={actionCount}
        >
            {name}
        </button>
    )
}
