import * as React from "react";
import '../redux-app.css'


// components  UI 组件
// contains 容器 组件
export default class ReactReduxCounter extends React.Component {


    increment = () => {
        // 1. 得到选择的增加数量
        const number = this.select.value * 1
        // 2. 调用 store 的方法 更新状态
        this.props.increment(number)
    }

    decrement = () => {
        // 1. 得到选择的增加数量
        const number = this.select.value * 1
        // 2. 调用 store 的方法 更新状态
        this.props.decrement(number)
    }

    incrementIfOdd = () => {
        // 1. 得到选择的增加数量
        const number = this.select.value * 1

        const {count} = this.props
        // 3. 更新状态
        if (count % 2 === 1) {
            this.props.increment(number)
        }
    }

    incrementAsync = () => {
        // 1. 得到选择的增加数量
        const number = this.select.value * 1

        // 3. 更新状态
        setTimeout(() => {
            this.props.increment(number)
        }, 1000)
    }

    render() {
        const {count} = this.props
        return (
            <div className='container redux-body'>
                <p>click {count} times</p>
                <div>
                    <select ref={select => this.select = select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.incrementIfOdd}>increment if odd</button>
                    <button onClick={this.incrementAsync}>increment anync</button>
                </div>
            </div>
        )
    }
}

