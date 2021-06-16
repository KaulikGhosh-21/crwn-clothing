import React from 'react'
import "./MenuItem.scss";

import { withRouter } from 'react-router';

const MenuItem = ({ title, imgUrl, history, match, linkUrl}) => {
    console.log(match)
    return (
        <div className="menu-item" onClick={() => history.push(`/${match.url}${linkUrl}`)}>
            <div style={{backgroundImage: `url(${imgUrl})`}} className="background-image" />
            <div className="content">
                <h1 className="title">{ title }</h1>
                <span className="sub-title">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);
