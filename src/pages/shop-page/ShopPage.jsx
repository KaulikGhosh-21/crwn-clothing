import React, {useEffect} from "react";

import {Route} from "react-router-dom";

import {connect} from "react-redux";

import CollectionOverviewContainer from "../../components/collection-overview/CollectionOverviewContainer";

import { fetchCollectionsStart } from "../../components/redux/shop-data/shopActionCreator";

import CollectionPageContainer from "../collection/CollectionPageContainer"


const ShopPage = (props) => {

    const { match, fetchCollectionsStart } = props;

    useEffect(() => {
            fetchCollectionsStart();
    }, [fetchCollectionsStart])

        console.log(props);
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} 
                component={CollectionOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} 
                component={CollectionPageContainer} />
            </div>
        )
    }

const mapDispatchToProps = dispatch => {
    return{
        fetchCollectionsStart : () => dispatch(fetchCollectionsStart())
    }
}

export default connect(null,mapDispatchToProps)(ShopPage)