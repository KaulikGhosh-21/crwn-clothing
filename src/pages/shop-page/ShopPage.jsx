import React from "react";

import CollectionOverview from "../../components/collection-overview/CollectionOverview";

import CollectionPage from "../collection/CollectionPage";

import {Route} from "react-router-dom";

import {connect} from "react-redux";

import { fetchCollectionsStartAsync } from "../../components/redux/shop-data/shopActionCreator";

import { selectIsCollectionFetching, selectIsCollectionLoaded } from "../../components/redux/shop-data/shopDataSelectors";

import WithSpinner from "../../components/spinner/Spinner";
import { createStructuredSelector } from "reselect";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)


class ShopPage extends React.Component{

    // constructor(props){
    //     super(props);

    //     this.state={
    //         isLoading : true
    //     }
    // }

    // unSubscribeFromSnapshot = null;

    componentDidMount(){
        const {fetchCollectionsStartAsync} = this.props;

        fetchCollectionsStartAsync();

        // const { updateCollections } = this.props;

        // const collectionRef = firestore.collection("collections");

        // collectionRef.get().then(snapshot => {
        //          console.log(snapshot);
        //          const changedData = transformCollectionToMap(snapshot)
        //          console.log(changedData);
        //          updateCollections(changedData);
        //          this.setState({ isLoading : false });
        //      })

        // this.unSubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
        //     console.log(snapshot);
        //     const changedData = transformCollectionToMap(snapshot)
        //     console.log(changedData);
        //     updateCollections(changedData);
        //     this.setState({ isLoading : false });
        // })
    }

    render(){
        const { match, isCollectionLoaded } = this.props;
        console.log(this.props);
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} 
                render={(props) => <CollectionOverviewWithSpinner isLoading={!isCollectionLoaded} {...props}/>} 
                />
                <Route path={`${match.path}/:collectionId`} 
                render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props}/>} 
                />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector(
    {
        isCollectionFetching : selectIsCollectionFetching(),
        isCollectionLoaded : selectIsCollectionLoaded()
    }
)

const mapDispatchToProps = dispatch => {
    return{
        fetchCollectionsStartAsync : () => dispatch(fetchCollectionsStartAsync())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)