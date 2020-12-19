import { call, put, select } from 'redux-saga/effects'
import { API_URL } from '../../config/apiUrls'
import axios from 'axios'

function* apiQuery({ endPoint, method, body = null }) {
    const state = yield select()
    const res = yield call(makeRequest, {
        endPoint,
        method,
        headers: {
            Authorization: state.user.token ? `Bearer ${state.user.token}` : null,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...body
        })
    })
    if (res.status === 401) {
        console.log(`Unauthorized`)
    }
    return res
}

const makeRequest = async ({ endPoint, method, headers, body = null }) => {
    return axios({
        method,
        headers,
        body: body === '{}' ? undefined : body,
        url: API_URL + endPoint
    }).then(response => {
        return response.data
    })
}


export { apiQuery }