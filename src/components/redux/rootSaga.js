import { all, call } from "redux-saga/effects";

import { fetchCollectionsStart } from "./shop-data/shopSaga";

export function* rootSaga(){
    yield all([
        call(fetchCollectionsStart)
    ])
}