import React, {ButtonHTMLAttributes} from "react";

type ButtonType = {
    // callBack: () => void,
    name: string
    // disabled?: boolean
    // classes?: string
}

// export const Button = ({callBack, name, disabled, classes, ...props}: ButtonType & ButtonHTMLAttributes<any>) => {
export const Button = ({ name, ...props}: ButtonType & ButtonHTMLAttributes<any>) => {

    //
    // const onClickHandler = () => {
    //     callBack()
    // }
    return <button {...props}>{name}</button>
}