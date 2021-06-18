import React from 'react'

import "./CustomButton.scss";

const CustomButton = ({children, isGoogleSignIn, inverted, type, onClick}) => {
    return (
            <button 
            onClick={onClick} 
            type={type} 
            className={`${inverted ? "button-inverted" : ""} 
            ${isGoogleSignIn ? "google-button" : ""} custom-button`}
            >
                {children}
            </button>
    )
}

export default CustomButton
