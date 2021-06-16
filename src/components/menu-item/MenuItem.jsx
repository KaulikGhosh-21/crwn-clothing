import React from 'react'
import "./MenuItem.scss";

const MenuItem = ({ title, imgUrl}) => {
    return (
        <div className="menu-item" style={{backgroundImage: `url(${imgUrl})`}}>
            <div style={{backgroundImage: `url(${imgUrl})`}} className="background-image" />
            <div className="content">
                <h1 className="title">{ title }</h1>
                <span className="sub-title">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem
