import * as React from "react";
import SearchApp from "./component/search/SearchApp";
import CommentApp from "./component/comment/app/CommentApp";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import RouterApp from "./component/router/SearchApp";
import Home from "./component/Home";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul className="nav nav-pills">
                            <li role="presentation" className="active"><Link to="/">Home</Link></li>
                            <li role="presentation"><Link to="/search">Search</Link></li>
                            <li role="presentation"><Link to="/comment">Comment</Link></li>
                            <li role="presentation"><Link to="/router">React Router</Link></li>
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