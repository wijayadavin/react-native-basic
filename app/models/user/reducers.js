import { GET_ALL_USERS_INFO_REQUEST_SUCCESS } from './actions'

const initialState = {
    id: 'no ID',
    name: 'no name',
    imageUrl: 'no image'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USERS_INFO_REQUEST_SUCCESS: {
            const { id, name, imageUrl } = action.payload

            return {
                id,
                name,
                imageUrl,
            }
        }
        default:
            return state
    }
}

export { reducer }