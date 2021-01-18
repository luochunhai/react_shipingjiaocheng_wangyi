import * as React from "react";
import SearchApp from "./component/search/SearchApp";
import CommentApp from "./component/comment/app/CommentApp";
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import RouterApp from "./component/router/RouterApp";
import Home from "./component/Home";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul className="nav nav-pills">
                            <li role="presentation" className="active"><NavLink to="/">Home</NavLink></li>
                            <li role="presentation"><NavLink to="/search">Search</NavLink></li>
                            <li role="presentation"><NavLink to="/comment">Comment</NavLink></li>
                            <li role="presentation"><NavLink to="/router">React Router</NavLink></li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/search"><SearchApp/></Route>
                        <Route path="/comment"><CommentApp/></Route>
                        <Route path="/router"><RouterApp/></Route>
                        <Route path="/"><Home/></Route>
                    </Switch>
                </div>
            </Router>
        );
    }

}

export default App;