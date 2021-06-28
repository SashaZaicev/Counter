import React, {ChangeEvent, Dispatch, SetStateAction, useEffect, useState} from 'react';
import {BodyCounter} from './BodyCounter';
import {ButtonCounter} from "./ButtonCounter";
import s from './StyleCounter.module.css'
import {CustomizationCounter} from "./CustomizationCounter";

type CounterType = {
    inc: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    reset: (defaultState: any) => void
    count: number
    maxValue: string
    startValue: string
    set: () => void
    btnSet: () => boolean
    onChange1: (event: ChangeEvent<HTMLInputElement>) => void
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    setOnShow: Dispatch<SetStateAction<boolean>>
    onShow: boolean

}
export const Counter: React.FC<CounterType> = (props) => {
    let btnInc = props.count === +props.maxValue ||
        +props.startValue === +props.maxValue
    let onShowProperties = () => {
        props.setOnShow(!props.onShow)
    }
    return (
        (!props.onShow)
            ?
            <div className={s.firstBodyCounter}>
                <BodyCounter maxValue={props.maxValue} count={props.count}/>
                <div className={s.secondBodyCounter}>
                    <ButtonCounter disabled={btnInc} name={'inc'} actionCount={props.inc}/>
                    <ButtonCounter disabled={false} name={'reset'} actionCount={props.reset}/>
                    <ButtonCounter disabled={false} name={'type'} actionCount={onShowProperties}/>
                </div>
            </div>
            : <CustomizationCounter
                set={props.set}
                startValue={props.startValue}
                maxValue={props.maxValue}
                btnSet={props.btnSet}
                onChange1={props.onChange1}
                onChange={props.onChange}
            />
    )
}