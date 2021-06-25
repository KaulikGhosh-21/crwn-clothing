import {connect} from "react-redux";
import WithSpinner from "../spinner/Spinner";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../redux/shop-data/shopDataSelectors";

// const mapStateToProps = createStructuredSelector(
//     {
//         isLoading : selectIsCollectionFetching
//     }
// )

const mapStateToProps = state => {
    return{
        isLoading : selectIsCollectionFetching(state)
    }
}

const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview));

export default CollectionOverviewContainer;