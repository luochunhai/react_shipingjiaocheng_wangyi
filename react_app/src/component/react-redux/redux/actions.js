/**
 * 包含所有 action creater
 */
import {DECREMENT, INCREMENT} from "./action-types";

export const increment = (number) => ({type: INCREMENT, data: number})
export const decrement = (number) => ({type: DECREMENT, data: number})