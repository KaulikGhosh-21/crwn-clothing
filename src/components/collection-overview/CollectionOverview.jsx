import React from 'react'

import "./CollectionOverview.scss";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";

import {connect} from "react-redux";

import {createStructuredSelector} from "reselect";

import {selectCollectionsForOverview} from "../../components/redux/shop-data/shopDataSelectors";


const CollectionOverview = ({collections}) => {
    return (
        <div className="collection-overview">
            {collections.map(({id, title, items}) => 
            <CollectionPreview key={id} title={title} items={items} />
            )}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForOverview
})

export default connect(mapStateToProps)(CollectionOverview)
