import { takeLatest, all, put, call } from "@redux-saga/core/effects";
import UserActionTypes from "../user/userActionTypes";

import { clearCart } from "./cartActionCreator";

export function* clearCartItems(){
    yield put(clearCart());
}

export function* onSignOutSuccess(){
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartItems)
}

export function* cartSagas(){
    yield all([call(onSignOutSuccess)]);
}