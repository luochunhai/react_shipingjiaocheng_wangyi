/**
 * 包含所有 action creater
 */
import {DECREMENT, INCREMENT} from "./action-types";

export const incrementCreator = (number) => ({type: INCREMENT, data: number})
export const decrementCreator = (number) => ({type: DECREMENT, data: number})