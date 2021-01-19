import * as React from "react";
import SearchPubSub from "./SearchPubSub";
import UserPubSubList from "./UserPubSubList";
import './style.css'

class SearchPubSubApp extends React.Component {

    render() {
        return (
            <div className="container">
                <SearchPubSub/>
                <UserPubSubList/>
            </div>
        )
    }
}

export default SearchPubSubApp;