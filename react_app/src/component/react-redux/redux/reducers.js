/**
 * 包含n个 reducer函数的 模块
 */
import {DECREMENT, INCREMENT} from './action-types'

export function counter(state = 0, action) {
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