import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

import {Provider} from 'react-redux'
import store from './component/react-redux/redux/store'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>

    </React.StrictMode>,
    document.getElementById('root')
);


/**
 * redux demo
 *
 // import {createStore} from 'redux'
 // import {counter} from './component/redux/reducers'
 //
 // //生成一个store 对象
 // //内部会第一次调用reducer,得到初始state
 // const store = createStore(counter)
 // console.log(store, store.getState())
 import store from './component/redux/store'

 function render(){
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store}/>
            </BrowserRouter>

        </React.StrictMode>,
        document.getElementById('root')
    );
}

 //初始化渲染
 render()

 // 订阅监听（store中的状态变化了，就会自动调用进行重绘）
 store.subscribe(render)

 */


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
