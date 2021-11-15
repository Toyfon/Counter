import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";


function App() {


    const [maxValue, setMaxValue] = useState<number>(JSON.parse(localStorage.getItem("maxValue")!))
    const [startValue, setStartValue] = useState<number>(JSON.parse(localStorage.getItem("startValue")!))
    const [value, setValue] = useState<number>(+startValue)

    const [isDisabled, setIsDisabled] = useState(true)
    const [error, setError] = useState<boolean>(false)


    useEffect(() => {
        if (value === maxValue) {
            setError(true)
        }
    }, [startValue])


    const incrementValue = () => {
        if (value < maxValue) {
            setValue(value + 1)
            setError(false)
        }
    }


    const decrementValue = () => {
        if (value > startValue) {
            setValue(value - 1)
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
                         decrementValue={decrementValue}
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
                          error={error}/>
            </div>

        </div>
    )
}

export default App;
