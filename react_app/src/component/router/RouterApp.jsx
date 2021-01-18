import * as React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import RouterAbout from "./RouterAbout";
import RouterHome from "./RouterHome";
import './style.css';
import MyNavLink from "./MyNavLink";

/**
 * 如何编写路由
 * 1. 编写路由组件
 * 2. 在父路由组件中指定
 *      路由链接： <NavLink>
 *      路由： <Route>
 */
class RouterApp extends React.Component {


    render() {
        return (
            <Router>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header">
                            <h2>React Router Demo</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <MyNavLink className="list-group-item" to="/router/home">Homes</MyNavLink>
                            <MyNavLink className="list-group-item" to="/router/about">About</MyNavLink>
                        </div>
                    </div>
                    <div className='col-xs-6'>
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path="/router/home" exact component={RouterHome}/>
                                    <Route path="/router/about" component={RouterAbout}/>
                                    {/*<Redirect to="/router/about"/>*/}
                                </Switch>
                            </div>
                        </div>

                    </div>
                </div>


            </Router>
        )
    }
}

export default RouterApp;