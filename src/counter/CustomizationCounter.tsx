import s from "./StyleCounter.module.css";
import {ButtonCounter} from "./ButtonCounter";
import React, {ChangeEvent, useState} from "react";

type CustomizationCounterPropsType = {
    set: () => void
    startValue: string
    maxValue: string
    btnSet: () => boolean
    onChange1: (event: ChangeEvent<HTMLInputElement>) => void
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const CustomizationCounter
    : React.FC<CustomizationCounterPropsType>
    = (props) => {
    // let setButtonCount = (startNum: number, endNum: number) => {
    //     setParameter(startNum, endNum)
    // }
    // let actionCount = (e: ChangeEvent<HTMLInputElement>) => {
    //
    //
    // }
    // let maxValue = (e: ChangeEvent<HTMLInputElement>) => {
    //     let newMaxValue = e.currentTarget.value
    // }
    // let startValue = (e: ChangeEvent<HTMLInputElement>) => {
    //     let newStartValue = e.currentTarget.value
    // }

    return (
        <div className={s.customization}>
            <div className={s.bodyCounter}>
                <label>
                    <span>max value <input value={props.maxValue} onChange={props.onChange} name='set'
                                           type='number'/></span>
                    <span>start value <input value={props.startValue} onChange={props.onChange1} name='set'
                                             type='number'/></span>
                </label>
            </div>
            <div className={s.secondBodyCounter}>
                <ButtonCounter disabled={props.btnSet()} name={'set'} actionCount={props.set}/>
            </div>
        </div>
    )
}