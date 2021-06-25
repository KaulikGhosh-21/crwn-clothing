import {connect} from "react-redux";
import WithSpinner from "../../components/spinner/Spinner";
import {compose} from "redux";
import CollectionPage from "../../pages/collection/CollectionPage"
import { createStructuredSelector } from "reselect";
import { selectIsCollectionLoaded } from "../../components/redux/shop-data/shopDataSelectors";

// const mapStateToProps = createStructuredSelector(
//     {
//         isLoading : (state) => !selectIsCollectionLoaded(state)
//     }
// )

const mapStateToProps = state => {
    return{
        isLoading : !selectIsCollectionLoaded(state)
    }
}


const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

// const CollectionPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage));

export default CollectionPageContainer;