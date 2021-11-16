import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";


function App() {

    const [maxValue, setMaxValue] = useState<number>(JSON.parse(localStorage.getItem("maxValue")!))
    const [startValue, setStartValue] = useState<number>(JSON.parse(localStorage.getItem("startValue")!))
    const [value, setValue] = useState<number | string>("startValue")

    const [isDisabled, setIsDisabled] = useState(true)
    const [error, setError] = useState(false)
    const [disableBtn, setDisableBtn] = useState(false)


    useEffect(() => {
        debugger
        if (value === maxValue) {
            setError(true)
        }
    }, [value])


    const incrementValue = () => {
        if (value < maxValue) {
            setValue(+value + 1)
            setError(false)
        }
    }


    const resetValue = () => {
        setValue(startValue)
        setError(false)
    }

    return (
        <div className="Wrapper">
            <div className="table">
                <Counter value={value}
                         maxValue={maxValue}
                         startValue={startValue}
                         incrementValue={incrementValue}
                         resetValue={resetValue}
                         isDisabled={isDisabled}
                         error={error}/>
            </div>
            <div className="settings">
                <Settings maxValue={maxValue}
                          setMaxValue={setMaxValue}
                          setValue={setValue}
                          value={value}
                          setStartValue={setStartValue}
                          startValue={startValue}
                          setIsDisabled={setIsDisabled}
                          setError={setError}
                          error={error}
                          disableBtn={disableBtn}
                          setDisableBtn={setDisableBtn}
                />
            </div>
        </div>
    )
}

export default App;
