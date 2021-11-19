import React from "react";
import {Button} from "../Button/Button";
import s from "./counter.module.css"

type TablePropsType = {
    value: number | string
    incrementValue: () => void
    resetValue: () => void
    maxValue: number
    startValue: number
    isDisabled: boolean
    error: boolean

}


export const Counter = ({
                            value, incrementValue, maxValue, resetValue,
                            startValue, isDisabled, error
                        }: TablePropsType) => {


    return (
        <div className={s.container}>
            <div className={s.value}>
                <h1 className={error ? s.redNumber : ""}>
                    {
                        maxValue === startValue || startValue < 0 || startValue > maxValue
                            ? <span style={{color: "red", fontSize: "30px"}}>"Incorrect value"</span>
                            : value
                    }
                </h1>
            </div>
            <div className={s.buttons}>
                <Button  className={s.btn} disabled={isDisabled ? isDisabled : value >= maxValue} onClick={incrementValue}
                        name={"Inc"}/>
                <Button className={s.btn} disabled={isDisabled ? isDisabled : value === startValue} onClick={resetValue}
                        name={"Reset"}/>
            </div>
        </div>
    )
}