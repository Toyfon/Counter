import React, {useState} from 'react';
import './App.css';
import {Table} from "./components/Table/Table";
import {Settings} from "./components/Settings/Settings";


function App() {

    const [value, setValue] = useState<number>(0)

    const [maxNumber, setMaxNumber] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)


    const incrementValue = () => {
        if (value < maxNumber) {
            setValue(value + 1)
        }
    }
    const decrementValue = () => {
        if (value > startValue) {
            setValue(value - 1)
        }
    }
    const resetValue = () => setValue(0)

    return (
        <div className="Wrapper">
            <div className="table">
                <Table value={value}
                       maxNumber={maxNumber}
                       startValue={startValue}
                       incrementValue={incrementValue}
                       decrementValue={decrementValue}
                       resetValue={resetValue}/>
            </div>
            <div className="settings">
                <Settings maxNumber={maxNumber}
                          setMaxNumber={setMaxNumber}
                          setValue={setValue}
                          value={value}
                          setStartValue={setStartValue}
                          startValue={startValue}/>
            </div>

        </div>
    )
}

export default App;
