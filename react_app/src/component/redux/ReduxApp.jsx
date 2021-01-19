import * as React from "react";

class ReduxApp extends React.Component {


    render() {
        return (
            <div>
                <p>click 0 times</p>
                <div>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button>+</button>
                    <button>-</button>
                    <button>increment if odd</button>
                    <button></button>
                </div>
            </div>
        )
    }
}

export default ReduxApp;