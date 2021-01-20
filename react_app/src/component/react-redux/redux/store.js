import {createStore} from 'redux'
import {counter} from './reducers'

//生成一个store 对象
//内部会第一次调用reducer,得到初始state
const store = createStore(counter)
console.log(store, store.getState())

export default store