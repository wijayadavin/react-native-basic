import { call, put, takeEvery } from 'redux-saga/effects'
import {
    GET_ALL_USERS_INFO_REQUEST,
    GET_ALL_USERS_INFO_REQUEST_SUCCESS,
} from './actions';
import { apiQuery } from './apiQuery'


function* handler() {
    yield takeEvery(GET_ALL_USERS_INFO_REQUEST, getAllUserInfo)
}

function* getAllUserInfo(action) {
    try {
        //API call:
        const pets = yield call(apiQuery, {
            endPoint: '/pet',
            method: 'GET'
        })
        console.log(['result', pets])
        yield put({
            type: GET_ALL_USERS_INFO_REQUEST_SUCCESS,
            payload: {
                id: pets[0].id,
                name: pets[0].name,
                imageUrl: pets[0].imageUrl
            }
        })
    } catch (err) {
        console.error(err)
    }
}

export { handler }