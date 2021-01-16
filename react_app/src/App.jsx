import * as React from "react";
import SearchApp from "./component/search/SearchApp";
import CommentApp from "./component/comment/app/CommentApp";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/search">Search</Link>
                            </li>
                            <li>
                                <Link to="/comment">Comment</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/search">
                            <SearchApp />
                        </Route>
                        <Route path="/comment">
                            <CommentApp />
                        </Route>
                        <Route path="/">
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }

}
export default App;