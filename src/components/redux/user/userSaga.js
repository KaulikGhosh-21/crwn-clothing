import UserActionTypes from "./userActionTypes";

import { signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpFailure, signUpSuccess } 
from "./userActionCreator";

import { takeLatest, call, put, all } from "@redux-saga/core/effects";

import { auth, googleProvider, createUserProfileDocument, isUserAuthenticated } 
from "../../firebase/firebase";

export function* getSnapshotFromUserAuth(userAuth, additionalData){
    try{
        const userRef = yield call(createUserProfileDocument,userAuth, additionalData);
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

export function* getUserSession(){
    try{
        const userAuth = yield isUserAuthenticated();
        console.log(userAuth)
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    }catch(err){
        yield put(signInFailure(err))
    }
}

export function* checkUserSession(){
    yield takeLatest(UserActionTypes.GET_USER_SESSION, getUserSession)
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

export function* signOut(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess());
    }catch(err){
        yield put(signOutFailure())
    }
    
}

export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* signUpStart({payload}){
    try{
        console.log(payload)
        const {email, password, displayName} = payload;
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({user, additionalData : {displayName}}))
    }catch(err){
        yield put(signUpFailure(err))
    }
}

export function* onSignUpStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUpStart)
}

export function* signInAfterSignUp({payload}){
    console.log(payload)
    const {user, additionalData} = payload;
    yield getSnapshotFromUserAuth(user, additionalData)
}

export function* signInOnSignUp(){
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* signInSagas(){
    yield all([call(onGoogleSignInStart), 
                call(onEmailSignInStart), 
                call(checkUserSession), 
                call(onSignOutStart),
                call(onSignUpStart),
                call(signInOnSignUp)]);
}

