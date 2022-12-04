import React, {useState} from 'react';
import './App.css';

function UseState() {
    let [a, setA] = useState(1);

    function onClickButtonHandler() {
        setA(++a)
    }

    function setOnZero() {
        setA(0)
    }

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickButtonHandler}>+</button>
            <button onClick={setOnZero}>Zero</button>
        </div>
    )
}

export default UseState;
