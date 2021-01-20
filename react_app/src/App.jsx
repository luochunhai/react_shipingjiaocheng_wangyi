import * as React from "react";
import SearchApp from "./component/search/SearchApp";
import CommentApp from "./component/comment/app/CommentApp";
import {NavLink, Route, Switch} from "react-router-dom";
import RouterApp from "./component/router/RouterApp";
import Home from "./component/Home";
import VideoApp from "./component/video/VideoApp";
import AntdApp from "./component/antd/AntdApp";
import SearchPubSubApp from "./component/search-pub-sub/SearchPubSubApp";
import CommentPubSubApp from "./component/comment-pub-sub/app/CommentPubSubApp";
import ReduxApp from "./component/redux/ReduxApp";
import CountApp from "./component/count/CountApp";

class App extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <ul className="nav nav-pills">
                        <li role="presentation" className="active"><NavLink to="/">Home</NavLink></li>
                        <li role="presentation"><NavLink to="/search">Search</NavLink></li>
                        <li role="presentation"><NavLink to="/SearchPubSubApp">Search 发布订阅</NavLink></li>
                        <li role="presentation"><NavLink to="/comment">Comment</NavLink></li>
                        <li role="presentation"><NavLink to="/comment-pub-sub">Comment  发布订阅</NavLink></li>
                        <li role="presentation"><NavLink to="/router">React Router</NavLink></li>
                        <li role="presentation"><NavLink to="/video">Video</NavLink></li>
                        <li role="presentation"><NavLink to="/antd">Antd</NavLink></li>
                        <li role="presentation"><NavLink to="/CountApp">CountApp</NavLink></li>
                        <li role="presentation"><NavLink to="/Redux">Count Redux应用</NavLink></li>

                    </ul>
                </nav>

                <Switch>
                    <Route path="/search"><SearchApp/></Route>
                    <Route path="/SearchPubSubApp"><SearchPubSubApp/></Route>
                    <Route path="/comment"><CommentApp/></Route>
                    <Route path="/comment-pub-sub"><CommentPubSubApp/></Route>
                    <Route path="/router"><RouterApp/></Route>
                    <Route path="/video"><VideoApp/></Route>
                    <Route path="/antd"><AntdApp/></Route>
                    <Route path="/CountApp"><CountApp/></Route>
                    <Route path="/Redux"><ReduxApp/></Route>
                    <Route path="/"><Home/></Route>
                </Switch>
            </div>
        );
    }

}

export default App;