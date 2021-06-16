import React from "react";
import CollectionItem from "../collection-items/CollectionItem";

import "./CollectionPreview.scss";

const CollectionPreview = ({title, items}) => {
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((item, id) => id < 4).map(item => 
                <CollectionItem 
                name={item.name} key={item.id} id={item.id} imageUrl={item.imageUrl} price={item.price} 
                />)}
            </div>
        </div>
    )
}

export default CollectionPreview;