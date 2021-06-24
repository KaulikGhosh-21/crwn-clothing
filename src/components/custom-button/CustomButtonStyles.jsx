import styled, {css} from "styled-components"

export const getButtonStyles = props => {
    if(props.isGoogleSignIn){
        return googleButtonStyle
    }

    return props.inverted ? invertedButtonStyle : baseStyleButton
}

export const ButtonContainer = styled.button`
    height: 50px;
    letter-spacing: 0.5px;
    padding: 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: "Open Sans Condensed";
    cursor: pointer;
    font-weight: bolder;

    ${getButtonStyles}
    
`

const googleButtonStyle = css`
    background-color: #4285f4;
    color: white;
    border: none;

    &:hover{
        background-color: #357ae8;
        border: none
    }
`

const invertedButtonStyle = css`
    background-color: #fff;
    color: black;
    border: 1px solid black;

    &:hover{
        background-color: black;
        color: #fff;
        border: none;
    }
`

const baseStyleButton = css`
    background-color: black;
    color: white;
    border: none;

    &:hover{
        background-color: #fff;
        color: black;
        border: 1px solid black;
    }
`