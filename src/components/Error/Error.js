import React from "react";

const Error = (props) => {
    const {message, onClick} = props

    return (
        <p onClick={onClick ? () => onClick() : () => null} className="form__error">{message}</p>
    )
}

export default Error