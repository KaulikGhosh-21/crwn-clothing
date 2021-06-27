import React from "react";

// import CollectionOverview from "../../components/collection-overview/CollectionOverview";

// import CollectionPage from "../collection/CollectionPage";

import {Route} from "react-router-dom";

import {connect} from "react-redux";

// import { selectIsCollectionFetching, selectIsCollectionLoaded } from "../../components/redux/shop-data/shopDataSelectors";

import CollectionOverviewContainer from "../../components/collection-overview/CollectionOverviewContainer";

import { fetchCollectionsStart } from "../../components/redux/shop-data/shopActionCreator";

// import { createStructuredSelector } from "reselect";

import CollectionPageContainer from "../collection/CollectionPageContainer"


class ShopPage extends React.Component{

    // constructor(props){
    //     super(props);

    //     this.state={
    //         isLoading : true
    //     }
    // }

    // unSubscribeFromSnapshot = null;

    componentDidMount(){
        const {fetchCollectionsStart} = this.props;

        fetchCollectionsStart();

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
        const { match } = this.props;
        console.log(this.props);
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} 
                component={CollectionOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} 
                component={CollectionPageContainer} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchCollectionsStart : () => dispatch(fetchCollectionsStart())
    }
}

export default connect(null,mapDispatchToProps)(ShopPage)