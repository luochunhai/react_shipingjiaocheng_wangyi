import * as React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import RouterAbout from "./RouterAbout";
import RouterHome from "./RouterHome";
import './style.css';
import MyNavLink from "./MyNavLink";

class RouterApp extends React.Component {


    render() {
        return (
            <Router>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header">
                            React Router Demo
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <MyNavLink className="list-group-item" to="/router/home">Router Home</MyNavLink>
                            <MyNavLink className="list-group-item" to="/router/about">Router About</MyNavLink>
                        </div>
                    </div>
                    <div className='col-xs-6'>
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path="/router/home" component={RouterHome}/>
                                    <Route path="/router/about" component={RouterAbout}/>
                                    <Redirect to="/router/about"/>

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