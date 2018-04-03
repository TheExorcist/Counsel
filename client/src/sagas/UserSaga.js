import { call, put, takeLatest } from 'redux-saga/effects'
import userSignUp from '../api/Users/signUp';

function* UserSignUpSaga(action) {
    
    yield put({ type: 'SIGNUP_REQUEST' })
    try { 
        const createdUser = yield call(userSignUp, action.payload)
        yield put({ type: 'SIGNUP_SUCCEDD', payload: createdUser })
    } catch(error) {
        yield put({ type: 'SIGNUP_FAILED', payload: error })
    }
}


function* rootUserSignUpSaga() {
    yield takeLatest('USER_SIGNUP', UserSignUpSaga)
}


export default rootUserSignUpSaga;