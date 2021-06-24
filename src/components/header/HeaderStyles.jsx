import styled, {css} from "styled-components";

import { Link } from "react-router-dom";

// const OptionStyles = css`
//     padding: 10px 15px;
//     cursor: pointer;
// `

export const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
`
export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 15px 25px 0;
`

export const OptionsContainer = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
`
export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`
