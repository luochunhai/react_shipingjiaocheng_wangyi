import * as React from "react";
import MyNavLink from "./MyNavLink";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import News from "./views/News";
import Messages from "./views/Messages";


class RouterHome extends React.Component {


    render() {
        return (
            <Router>
                <h2>Home 组件内容</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to="/router/home/news">News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="/router/home/messages">Message</MyNavLink>
                        </li>
                    </ul>
                </div>
                <Switch>
                    <Route path='/router/home/news' component={News}/>
                    <Route path='/router/home/messages' component={Messages}/>
                </Switch>
            </Router>
        )
    }
}

export default RouterHome;