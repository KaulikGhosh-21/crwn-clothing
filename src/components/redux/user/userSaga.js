import UserActionTypes from "./userActionTypes";

import { signInSuccess, signInFailure } from "./userActionCreator";

import { takeLatest, call, put, all } from "@redux-saga/core/effects";

import { auth, googleProvider, createUserProfileDocument } from "../../firebase/firebase";

export function* getSnapshotFromUserAuth(userAuth){
    try{
        const userRef = yield call(createUserProfileDocument,userAuth);
        console.log(userRef)
        const userSnapshot = yield userRef.get();
        console.log(userSnapshot)
        yield put(
            signInSuccess({id : userSnapshot.id, ...userSnapshot.data()})
            );
    } catch(err){
        yield put(
            signInFailure(err)
        );
    }
}

export function* googleSignIn(){
    try{
        const {user} = yield auth.signInWithPopup(googleProvider);
        console.log(user)
        yield call(getSnapshotFromUserAuth,user)
    }catch(err){
        yield put(signInFailure(err))
    }
    
}

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn)
}



export function* emailSignIn({payload}){
    const {email, password} = payload;
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield call(getSnapshotFromUserAuth, user)
    }
        catch(err){
        yield put(
            signInFailure(err)
        )
    }
}

export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignIn)
}

export function* signInSagas(){
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}