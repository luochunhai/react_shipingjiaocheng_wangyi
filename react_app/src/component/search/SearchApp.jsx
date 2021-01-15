import * as React from "react";
import Search from "./Search";
import UserList from "./UserList";
import './style.css'

class SearchApp extends React.Component {

    render() {
        return (
            <div className="container">
                <Search/>
                <UserList/>
            </div>
        )
    }
}

export default SearchApp;