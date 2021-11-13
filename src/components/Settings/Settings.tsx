import React, {ChangeEvent} from "react";
import s from './settings.module.css'
import {Button} from "../Button/Button";


type SettingsType = {
    maxNumber: number
    setMaxNumber: (maxNumber: number) => void
    setValue: (value: number) => void
    value: number
    setStartValue: (startValue: number) => void
    startValue: number
}

export const Settings = ({
                             maxNumber,
                             setMaxNumber,
                             setValue, value,
                             setStartValue,
                             startValue, ...props
                         }: SettingsType) => {

    const callBackHandler = () => {
        setStartValue(startValue)
        setMaxNumber(maxNumber)
        setValue(startValue)
    }

    const onChangeMaxNumberHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let maxNumber = +(e.currentTarget.value)
        setMaxNumber(maxNumber)
    }
    const onChangeStartNumberHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let startValue = +(e.currentTarget.value)
        setStartValue(startValue)
    }
    return (
        <div className={s.container}>
            <div className={s.value}>
                <div className={s.maxInput}>
                <span>max value:
                <input type="number"
                       value={maxNumber}
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