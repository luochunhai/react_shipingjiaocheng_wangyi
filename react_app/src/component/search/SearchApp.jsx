import * as React from "react";
import Search from "./Search";
import UserList from "./UserList";
import './style.css'

class SearchApp extends React.Component {

    state = {
        searchName: ''
    }

    setSearchName = (searchName) => {
        this.setState({searchName})
    }

    render() {
        return (
            <div className="container">
                <Search setSearchName={this.setSearchName}/>
                <UserList searchName={this.state.searchName}/>
            </div>
        )
    }
}

export default SearchApp;