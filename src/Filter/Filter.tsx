import React, {useState} from 'react';
import {NewComponent} from "./NewComponent";

export type FilterType = 'all' | 'dollars' | 'euro'

function Filter() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'Euro', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'Euro', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'Euro', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFiler] = useState<FilterType>('all')

    let filteredMoney = money

    if (filter === "dollars") {
        filteredMoney = money.filter(x => x.banknots === "Dollars")
    }
    if (filter === "euro") {
        filteredMoney = money.filter(x => x.banknots === "Euro")
    }

    const onclickFilterHandler = (nameButton: FilterType) => {
        setFiler(nameButton)
    }

    return (
        <>
            <NewComponent filteredMoney={filteredMoney} onclickFilterHandler={onclickFilterHandler}/>
        </>
    )
}

export default Filter;
