import React, {useState} from 'react';
import './App.css';
import {Table} from "./Table";


function App() {

    const [value, setValue] = useState<number>(0)

    const maxNumber = 5
    const minNumber = 0

    const incrementValue = () => {
        if (value < maxNumber) {
            setValue(value + 1)
        }
    }
    const decrementValue = () => {
        if (value > minNumber) {
            setValue(value - 1)
        }
    }

    const resetValue = () => setValue(0)

    return (
        <Table value={value}
               maxNumber={maxNumber}
               minNumber={minNumber}
               incrementValue={incrementValue}
               decrementValue={decrementValue}
               resetValue={resetValue}/>
    )
}

export default App;
