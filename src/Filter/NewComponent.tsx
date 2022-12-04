import React from 'react';
import {FilterType} from "./Filter";

type NewComponentPropsType = {
    filteredMoney: Array<FilteredMoneyType>,
    onclickFilterHandler: (nameButton: FilterType) => void
}
type FilteredMoneyType = {
    banknots: string,
    value: number,
    number: string
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <>
            <ul>
                {props.filteredMoney.map((x, index) => {
                    return (
                        <li key={index}>
                            <span>{x.banknots} </span>
                            <span> {x.value} </span>
                            <span> {x.number} </span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: "30px"}}>
                <button onClick={() => props.onclickFilterHandler('all')}>All</button>
                <button onClick={() => props.onclickFilterHandler('dollars')}>Dollar</button>
                <button onClick={() => props.onclickFilterHandler('euro')}>Euro</button>
            </div>
        </>
    )
};
