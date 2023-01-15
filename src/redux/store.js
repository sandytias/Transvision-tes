import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
    coupon: []
}

function reducer(state = initialState, action) {
    // console.log('action', action)
    switch (action.type) {
        case 'SET_COUPON':
            return {...state, coupon: action.coupon}    
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store