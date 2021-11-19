import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";



const App = () => {

    let initialValue = localStorage.getItem('counterValue')

    const [maxValue, setMaxValue] = useState<number>(JSON.parse(localStorage.getItem("maxValue")!))
    const [startValue, setStartValue] = useState<number>(JSON.parse(localStorage.getItem("startValue")!))
    const [value, setValue] = useState<number | string>(initialValue != null ? +initialValue : 0)

    const [isDisabled, setIsDisabled] = useState(true)
    const [error, setError] = useState(false)



    const incrementValue = () => {
        if (!isNaN(+value) && value < maxValue) {
            setValue(+value + 1)
            setError(false)
        }
    }
    const resetValue = () => {
        setValue(startValue)
        setError(false)
    }



    useEffect(() => {
        if (value === maxValue) {
            setError(true)
        }
    }, [value])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value])

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if(valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, [])

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
                />
            </div>
        </div>
    )
}

export default App;
