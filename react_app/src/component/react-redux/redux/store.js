import {applyMiddleware, combineReducers, createStore} from 'redux'
import {counter} from './reducers'
import {comments} from '../../comment-redux/redux/reducers'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'


//生成一个store 对象
//内部会第一次调用reducer,得到初始state
//applyMiddleware(thunk)  应用异步中间件
const store = createStore(
    combineReducers([comments, counter]),
    composeWithDevTools(applyMiddleware(thunk))
)
console.log(store, store.getState())

export default store