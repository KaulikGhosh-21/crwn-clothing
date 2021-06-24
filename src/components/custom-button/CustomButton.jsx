import React from 'react'

import {ButtonContainer} from "./CustomButtonStyles";

const CustomButton = ({children, ...props}) => {
    return (
            <ButtonContainer {...props}>
                {children}
            </ButtonContainer>
    )
}

export default CustomButton
