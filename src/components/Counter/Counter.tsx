import React from "react";
import {Button} from "../Button/Button";
import s from "./table.module.css"

type TablePropsType = {
    value: number
    incrementValue: () => void
    decrementValue: () => void
    resetValue: () => void
    maxValue: number
    startValue: number
    isDisabled:boolean
    error:boolean
}


export const Counter = ({value, incrementValue, maxValue, decrementValue, resetValue,
                          startValue,isDisabled,error}: TablePropsType) => {


    //const warningMessage = value === maxValue ? <div className={s.warning} style={{color: "red"}}>Хватит щелкать!</div> : null
    /*const warningCountColor = `${value === maxValue ? s.redNumber : undefined}`*/

    return (
        <div className={s.container}>
            <div className={s.value}>
                <h1 className={error ? s.redNumber : ""}>{value}</h1>
          {/*      {warningMessage}*/}
            </div>
            <div className={s.buttons}>
                <Button classes={s.btn} disabled={isDisabled? isDisabled : value >= maxValue} callBack={incrementValue} name={"Inc"}/>
                <Button classes={s.btn} disabled={isDisabled? isDisabled : value <= startValue} callBack={decrementValue} name={"Dec"}/>
                <Button classes={s.btn} disabled={isDisabled? isDisabled : value === startValue} callBack={resetValue} name={"Reset"}/>
            </div>
        </div>
    )
}