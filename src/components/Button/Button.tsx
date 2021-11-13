import React from "react";

type ButtonType = {
    callBack: () => void,
    name: string
    disabled?: boolean
    classes?: string
}

export const Button = ({callBack, name, disabled,classes,...props}: ButtonType) => {

    const onClickHandler = () => {
        callBack()
    }
    return <button className={classes} disabled={disabled} onClick={onClickHandler}>{name}</button>
}