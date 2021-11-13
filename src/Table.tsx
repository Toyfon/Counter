import React from "react";
import {Button} from "./components/Button";

type TablePropsType = {
    value: number
    incrementValue: () => void
    decrementValue: () => void
    resetValue: () => void
    maxNumber: number
    minNumber: number

}


export const Table = ({value, incrementValue, maxNumber, decrementValue, resetValue, minNumber}: TablePropsType) => {


    const warningMessage = value === maxNumber ? <div style={{color: "red"}}>Хватит щелкать!</div> : null

    return (
        <div className="Wrapper">
            <h1 className={value === maxNumber ? "redNumber" : ""}>{value}</h1>
            {warningMessage}
            <div className="buttons">
                <Button disabled={value >= maxNumber} callBack={incrementValue} name={"+"}/>
                <Button disabled={value <= minNumber} callBack={decrementValue} name={"-"}/>
                <Button disabled={value === minNumber} callBack={resetValue} name={"R"}/>
            </div>
        </div>
    )
}