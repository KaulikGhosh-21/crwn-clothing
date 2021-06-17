import React from 'react'

import "./FormInput.scss";

const FormInput = ({ name, value, type, label, handleChange }) => {
    return (
        <div className="group">
            <input 
            className="form-input" 
            type={type} 
            name={name} 
            value={value} 
            onChange={handleChange} 
            />
            { label ? 
            <label className="form-label">
                {label}
            </label> 
            : null }
        </div>
    )
}

export default FormInput
