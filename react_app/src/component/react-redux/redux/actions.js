/**
 * 包含所有 action creater
 */
import {DECREMENT, INCREMENT} from "./action-types";

export const increment = (number) => ({type: INCREMENT, data: number})
export const decrement = (number) => ({type: DECREMENT, data: number})
/**
 *同步 action 返回 一个  对象
 *异步 action 返回 一个  函数
 * @param number
 * @returns {Function}
 */
//异步action
export const incrementAsync = (number) => {
    return dispatch => {
        setTimeout(() => {
            // 1s 之后采取分发一个增加的 action
            dispatch(increment(number))
        }, 1000)
    }
}