import logo from './logo.svg';
import './App.css';
import * as React from "react";

class App extends React.Component {
    render() {
        return (
            <div>
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
        );
    }
}

export default App;
