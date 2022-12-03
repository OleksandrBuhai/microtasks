import React from 'react';
import c from './Map.module.css'

type NewComponentsPropsType = {
    topCars: Array<topCarsType>
}
type  topCarsType = {
    manufacturer:string,
    model:string
}

const NewComponents = (props:NewComponentsPropsType) => {

    return (
        <div>
            {props.topCars.map(x=> {
               return <table className={c.table}>
                <th>{x.manufacturer } </th>
                <td>{x.model}</td>
               </table>})}
        </div>
    );
};

export default NewComponents;