import React, {useState} from "react";
import s from './settings.module.css'
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";


type SettingsType = {
    maxValue: number
    setMaxValue: (maxNumber: number) => void
    setValue: (value: number) => void
    value: number | string
    setStartValue: (startValue: number) => void
    startValue: number
    setIsDisabled: (isDisabled: boolean) => void
    setError: (error: boolean) => void
    error: boolean
}

export const Settings = ({
                             maxValue,
                             setMaxValue,
                             setValue, value,
                             setStartValue,
                             startValue,
                             setIsDisabled,
                             setError,
                             error, ...props
                         }: SettingsType) => {


    const [disableBtn, setDisableBtn] = useState(false)

    const callBackHandler = () => {
        /*setMaxValue(maxValue)*/
       /* setStartValue(startValue)*/
        setValue(startValue)
        setIsDisabled(false)
        setError(false)
        setDisableBtn(true)
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }

    const onChangeMaxNumberHandler = (value: number) => {
        setMaxValue(value)
        setIsDisabled(true)
        setDisableBtn(false)
       /* localStorage.setItem('maxValue', JSON.stringify(value))*/
    }
    const onChangeStartNumberHandler = (value: number) => {
        setStartValue(value)
        setIsDisabled(true)
        setDisableBtn(false)
      /*  localStorage.setItem('startValue', JSON.stringify(value))*/
    }


    return (
        <div className={s.container}>
            <div className={s.value}>
                <div className={s.maxInput}>
                <span>max value:
                    <Input value={maxValue}
                           callBack={onChangeMaxNumberHandler}
                           setError={setError}
                           error={error}
                           maxValue={maxValue}
                           startValue={startValue}/>
                </span>

                </div>
                <div className={s.minInput}>
                    <span>start value:
                       <Input value={startValue}
                              callBack={onChangeStartNumberHandler}
                              setError={setError}
                              error={error}
                              maxValue={maxValue}
                              startValue={startValue}
                       />
                </span>
                </div>
            </div>
            <div className={s.buttons}>
                <Button className={s.btn} onClick={callBackHandler} name={'Set'} disabled={disableBtn}/>
            </div>
        </div>
    )
}