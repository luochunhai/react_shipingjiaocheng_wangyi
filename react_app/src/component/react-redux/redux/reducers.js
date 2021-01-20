/**
 * 包含n个 reducer函数的 模块
 */
import {combineReducers} from 'redux'
import {DECREMENT, INCREMENT} from './action-types'
import {ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENT} from "../../comment-redux/redux/action-types";

/**
 * 包含n个 reducer函数的 模块 (根据老的state和action，返回一个新的state)
 */

function counter(state = 0, action) {
    console.log('counter()', state, action)
    switch (action.type) {
        case INCREMENT:
            return state + action.data
        case DECREMENT:
            return state - action.data
        default:
            return state;
    }
}

const initComments = []

function comments(state = initComments, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [action.data, ...state]
        case DELETE_COMMENT:
            return state.filter((comment, index) => index !== action.data)
        case RECEIVE_COMMENT:
            return action.data
        default:
            return state;
    }
}

export default combineReducers({
    counter, comments
})
