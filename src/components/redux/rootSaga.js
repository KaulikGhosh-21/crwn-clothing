import { all, call } from "redux-saga/effects";

import { fetchCollectionsStart } from "./shop-data/shopSaga";

import { signInSagas } from "./user/userSaga";

export function* rootSaga(){
    yield all([
        call(fetchCollectionsStart),
        call(signInSagas)
    ])
}