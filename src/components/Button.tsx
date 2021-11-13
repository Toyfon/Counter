import React from "react";

type ButtonType = {
    callBack: () => void,
    name: string
    disabled?: boolean

}

export const Button = ({callBack, name, disabled}: ButtonType) => {

    const onClickHandler = () => {
        callBack()
    }
    return <button disabled={disabled} onClick={onClickHandler}>{name}</button>
}