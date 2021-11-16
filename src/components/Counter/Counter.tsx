import React from "react";
import {Button} from "../Button/Button";
import s from "./table.module.css"

type TablePropsType = {
    value: number | string
    incrementValue: () => void
    resetValue: () => void
    maxValue: number
    startValue: number
    isDisabled:boolean
    error:boolean
}


export const Counter = ({value, incrementValue, maxValue, resetValue,
                          startValue,isDisabled,error}: TablePropsType) => {



    return (
        <div className={s.container}>
            <div className={s.value}>
                <h1 className={error ? s.redNumber : ""}>{maxValue===startValue || startValue < 0 ?
                    <span style={{color: "red"}}>"Incorrect value"</span> :value}</h1>
                {/*<h1 className={error ? s.redNumber : ""}>{value}</h1>*/}
            </div>
            <div className={s.buttons}>
                <Button classes={s.btn} disabled={isDisabled? isDisabled : value >= maxValue} callBack={incrementValue} name={"Inc"}/>
                <Button classes={s.btn} disabled={isDisabled? isDisabled : value === startValue} callBack={resetValue} name={"Reset"}/>
            </div>
        </div>
    )
}