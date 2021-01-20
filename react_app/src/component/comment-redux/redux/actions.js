/**
 * 包含所有 action creater
 */
import {ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENT} from "./action-types";


export const addComment = (comment) => ({type: ADD_COMMENT, data: comment})
export const deleteComment = (index) => ({type: DELETE_COMMENT, data: index})

//同步接收 comments
const receiveComment = (comments) => ({type: RECEIVE_COMMENT, data: comments})

//异步后台 获取数据

export const getComments = () => {
    return dispatch => {
        setTimeout(() => {
            const initComments = [
                {userName: 'Tom', content: 'React 11'},
                {userName: 'Jack', content: 'React 21'}
            ]
            dispatch(receiveComment(initComments))
            //分发一个同步的 action
        }, 1000)
    }
}