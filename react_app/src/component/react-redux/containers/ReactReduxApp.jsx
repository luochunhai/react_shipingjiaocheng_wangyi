import {connect} from "react-redux";
import ReactReduxCounter from "../components/ReactReduxCounter";
import {decrement, increment} from "../redux/actions";

// components  UI 组件
// contains 容器 组件

export default connect(
    state => ({count: state}),
    {increment, decrement}
)(ReactReduxCounter);