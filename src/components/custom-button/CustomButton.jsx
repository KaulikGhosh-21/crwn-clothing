import React from 'react'

import "./CustomButton.scss";

const CustomButton = ({children, isGoogleSignIn, type, onClick}) => {
    return (
            <button 
            onClick={onClick} 
            type={type} 
            className={`${isGoogleSignIn ? "google-button" : ""} custom-button`}
            >
                {children}
            </button>
    )
}

export default CustomButton
