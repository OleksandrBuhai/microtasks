import React from 'react';
import './App.css';
import NewComponents from "./map/Map";

function App() {

    const topCars = [
        {manufacturer: 'BMW ', model: 'm5cs'},
        {manufacturer: 'Mercedes ', model: 'e63s'},
        {manufacturer: 'Audi ', model: 'rs6'}
    ]

    return (
        <>
            <NewComponents topCars={topCars}/>
        </>
    );
}

export default App;
