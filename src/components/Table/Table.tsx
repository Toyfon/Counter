import React from "react";
import {Button} from "../Button/Button";
import s from "./table.module.css"

type TablePropsType = {
    value: number
    incrementValue: () => void
    decrementValue: () => void
    resetValue: () => void
    maxNumber: number
    startValue: number

}


export const Table = ({value, incrementValue, maxNumber, decrementValue, resetValue, startValue}: TablePropsType) => {


    const warningMessage = value === maxNumber ? <div className={s.warning} style={{color: "red"}}>Хватит щелкать!</div> : null
    const warningCountColor = `${value === maxNumber ? s.redNumber : " "}`

    return (
        <div className={s.container}>
            <div className={s.value}>
                <h1 className={warningCountColor}>{value}</h1>
                {warningMessage}
            </div>
            <div className={s.buttons}>
                <Button classes={s.btn} disabled={value >= maxNumber} callBack={incrementValue} name={"Inc"}/>
                <Button classes={s.btn} disabled={value <= startValue} callBack={decrementValue} name={"Dec"}/>
                <Button classes={s.btn} disabled={value === startValue} callBack={resetValue} name={"Reset"}/>
            </div>
        </div>
    )
}