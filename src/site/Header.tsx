import React from "react";

type HeaderPropsType = {
    tittle:string
}

export const Header = (props:HeaderPropsType) => {
    return (
        <>
            {props.tittle}
        </>
    )
}