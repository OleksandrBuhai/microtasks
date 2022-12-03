import React, {useState} from 'react';
import './App.css';
import NewComponents from "./map/Map";

function App() {

    let [a, setA] = useState(1);

    function onClickButtonHandler() {
        setA(++a)
    }

    return (
        <>
            <div>{a}</div>
            <button onClick={() => {
                onClickButtonHandler()
            }}></button>
        </>
    )
}

export default App;
