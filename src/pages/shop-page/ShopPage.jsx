import React from "react";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";
import { ShopData } from "./shopData";

class ShopPage extends React.Component{
    constructor(){
        super();
        this.state = {
            collections : ShopData
        }
    }

    render(){
        // console.log(this.state.collections)
        const { collections } = this.state;
        return(
            <div className="shop-page">
                {collections.map(({title, id, items}) => 
                    <CollectionPreview key={id} title={title} items={items}
                />)}
            </div>
        )
    }
}

export default ShopPage;