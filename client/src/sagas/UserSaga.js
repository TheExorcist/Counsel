import { call, put, all, takeLatest } from 'redux-saga/effects'
import userSignUp from '../api/Users/signUp';
import loggedInUser from '../api/Users/loggedInUser';


function* UserSignUpSaga(action) {

    yield put({ type: 'SIGNUP_REQUEST' })
    try {
        const createdUser = yield call(userSignUp, action.payload)
        if (createdUser.errors) {
          yield put({ type: 'USER_SIGNUP_FAILED', payload: createdUser })
        } else {
          yield put({ type: 'USER_SIGNUP_SUCCEED', payload: createdUser })
        }
    } catch(error) {
        yield put({ type: 'USER_SIGNUP_FAILED', payload: error })
    }
}

function* UserCheckLoggedIn(action) {
    try {
      const currentUser = yield call(loggedInUser, action.payload)
      debugger;
      yield put({ type: 'USER_LOGGEDIN', payload: currentUser })
    } catch (error) {
      yield put({ type: 'USER_NOT_LOGGEDIN' })
    }
}

function* rootUserSignUpSaga() {
    yield all([ takeLatest('GET_LOGGEDIN_USER', UserCheckLoggedIn), takeLatest('USER_SIGNUP', UserSignUpSaga) ])
}


export default rootUserSignUpSaga;
