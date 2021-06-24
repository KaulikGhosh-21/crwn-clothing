import React from "react";

import CollectionOverview from "../../components/collection-overview/CollectionOverview";

import CollectionPage from "../collection/CollectionPage";

import {Route} from "react-router-dom";

import {connect} from "react-redux";

import { updateCollections } from "../../components/redux/shop-data/shopActionCreator";

import {firestore, transformCollectionToMap} from "../../components/firebase/firebase";

import WithSpinner from "../../components/spinner/Spinner";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)


class ShopPage extends React.Component{

    constructor(props){
        super(props);

        this.state={
            isLoading : true
        }
    }

    unSubscribeFromSnapshot = null;

    componentDidMount(){

        const { updateCollections } = this.props;

        const collectionRef = firestore.collection("collections");

        collectionRef.get().then(snapshot => {
                 console.log(snapshot);
                 const changedData = transformCollectionToMap(snapshot)
                 console.log(changedData);
                 updateCollections(changedData);
                 this.setState({ isLoading : false });
             })

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
                render={(props) => <CollectionOverviewWithSpinner isLoading={this.state.isLoading} {...props}/>} 
                />
                <Route path={`${match.path}/:collectionId`} 
                render={(props) => <CollectionPageWithSpinner isLoading={this.state.isLoading} {...props}/>} 
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        updateCollections : (changedData) => dispatch(updateCollections(changedData))
    }
}

export default connect(null, mapDispatchToProps)(ShopPage)