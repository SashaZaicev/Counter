import React, {ChangeEvent, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from './counter/Counter';
import {CustomizationCounter} from "./counter/CustomizationCounter";
import {restoreState, saveState} from "./localStorage";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incValueAC} from "./bll/counter-reducer";

function AppRedux() {
    const value = useSelector<AppStateType, number>(state => state.counter.value)

    const dispatch = useDispatch()
    const incHandler = () => {
        dispatch(incValueAC())
    }


    let [count, setCount] = useState(0)
    let [maxValue, setMaxValue] = useState('')
    let [startValue, setStartValue] = useState('')
    let [onShow, setOnShow] = useState(false)
    useEffect(() => {
        oldStorage()
    }, [])


    let incCount = () => {
        setCount(count + 1)
    }
    let resetCount = (defaultState: any) => {
        let aaa = restoreState("start-input-value", defaultState)
        setCount(+aaa)
    }
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(event.currentTarget.value);

    }

    const onChange1 = (event: ChangeEvent<HTMLInputElement>) => {
        setStartValue(event.currentTarget.value);
    }
    const set = () => {
        if (maxValue || startValue) {
            saveState("max-input-value", maxValue)
            saveState("start-input-value", startValue)
            setCount(+startValue)
            setOnShow(!onShow)
        }
    }
    const newSet = () => {
        if (maxValue || startValue) {
            saveState("max-input-value", maxValue)
            saveState("start-input-value", startValue)
            setCount(+startValue)
        }
    }
    let oldStorage = () => {
        if (!startValue && !maxValue) {
            let aaa = restoreState("start-input-value")
            let bbb = restoreState("max-input-value")
            setStartValue(aaa)
            setMaxValue(bbb)
            setCount(+aaa)
        }
    }

    let btnSet = () => {
        let newMaxValue = restoreState("max-input-value")
        let newStartValue = restoreState("start-input-value")
        return (
            startValue >= maxValue ||
            startValue === newStartValue &&
            maxValue === newMaxValue
        )
    }
    return (
        <div className="App">
            <header className="App-header">
                {/*<h1>{value}</h1>*/}
                {/*<button onClick={incHandler}>inc</button>*/}
                    <Counter inc={incCount}
                             reset={resetCount}
                             count={count}
                             maxValue={maxValue}
                             startValue={startValue}
                             onShow={onShow}

                             set={set}
                             btnSet={btnSet}
                             onChange1={onChange1}
                             onChange={onChange}
                             setOnShow={setOnShow}
                    />
                    {(!onShow) ?
                        <CustomizationCounter
                            set={newSet}
                            startValue={startValue}
                            maxValue={maxValue}
                            btnSet={btnSet}
                            onChange1={onChange1}
                            onChange={onChange}
                        /> : <div></div>}
            </header>
        </div>
    );
}

export default AppRedux;
