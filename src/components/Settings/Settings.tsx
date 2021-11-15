import React, {ChangeEvent, useState} from "react";
import s from './settings.module.css'
import {Button} from "../Button/Button";


type SettingsType = {
    maxValue: number
    setMaxValue: (maxNumber: number) => void
    setValue: (value: number) => void
    value: number
    setStartValue: (startValue: number) => void
    startValue: number
    setIsDisabled: (isDisabled:boolean)=>void
    setError:(error:boolean)=> void
    error:boolean
}

export const Settings = ({
                             maxValue,
                             setMaxValue,
                             setValue, value,
                             setStartValue,
                             startValue,
                             setIsDisabled,
                             setError,
                             error,...props
                         }: SettingsType) => {

    // const [newMaxValue,setNewMaxValue] = useState(JSON.parse(localStorage.getItem("maxValue")!))
    // const [newStartValue,setNewStartValue] = useState(JSON.parse(localStorage.getItem("startValue")!))

    const callBackHandler = () => {
        setMaxValue(maxValue)
        setStartValue(startValue)
        setValue(startValue)
        setIsDisabled(false)
    }

    const onChangeMaxNumberHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let maxInputValue = (+e.currentTarget.value)
            setMaxValue(maxInputValue)
            setIsDisabled(true)
            localStorage.setItem('maxValue', JSON.stringify(maxInputValue))
    }
    const onChangeStartNumberHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let startInputValue = (+e.currentTarget.value)
        setStartValue(startInputValue)
        setIsDisabled(true)
        localStorage.setItem('startValue', JSON.stringify(startInputValue))
    }

    return (
        <div className={s.container}>
            <div className={s.value}>
                <div className={s.maxInput}>
                <span>max value:
                <input className={error? s.error : undefined}
                       type="number"
                       value={maxValue}
                       onChange={onChangeMaxNumberHandler}/>
                </span>

                </div>
                <div className={s.minInput}><span>start value:
                <input type="number"
                       value={startValue}
                       onChange={onChangeStartNumberHandler}/>
                </span>
                </div>
            </div>
            <div className={s.buttons}>
                <Button classes={s.btn} callBack={callBackHandler} name={'Set'}/>
            </div>
        </div>
    )
}