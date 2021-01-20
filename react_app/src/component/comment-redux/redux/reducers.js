/**
 * 包含n个 reducer函数的 模块 (根据老的state和action，返回一个新的state)
 */
import {ADD_COMMENT, DELETE_COMMENT} from "./action-types";

const initComments = [
    {userName: 'Tom', content: 'React 11'},
    {userName: 'Jack', content: 'React 21'}
]

export function comments(state = initComments, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [action.data, ...state]
        case DELETE_COMMENT:
            return state.filter((comment, index) => index !== action.data)
        default:
            return state;
    }
}