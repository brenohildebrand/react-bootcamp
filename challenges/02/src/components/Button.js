import React from 'react'

const Button = ({ children, kind }) => {
    return (
        <button className={kind}>
            {children}
        </button>
    )
}

export default Button