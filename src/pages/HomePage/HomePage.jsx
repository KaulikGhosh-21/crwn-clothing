import React from 'react'
import "./HomePage.scss";
import Directory from '../../components/directory/Directory';

import { HomePageContainer } from './HomePageStyles'; 

const HomePage = () => {
    return (
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    )
}

export default HomePage
