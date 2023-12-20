import React from "react";
// import StyledError from "./StyledError.styled";

const Error = (props) => {
    const {message, onClick} = props

    return (
        <p onClick={onClick ? () => onClick() : () => null} className="form__error">{message}</p>
    )
}

export default Error