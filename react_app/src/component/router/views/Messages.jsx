import * as React from "react";
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom";
import MessageDetail from "./MessageDetail";

class Messages extends React.Component {

    state = {
        messages: []
    }

    componentDidMount() {
        setTimeout(() => {
            const messages = [
                {id: '1', title: 'message1', content: "content1"},
                {id: '2', title: 'message2', content: "content2"},
                {id: '3', title: 'message3', content: "content3"},
            ]
            this.setState({messages})
        }, 10)
    }

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        {
                            this.state.messages.map((msg, index) => (
                                <li key={index}>
                                    <NavLink to={`/router/home/messages/detail/${msg.id}`}>{msg.title}</NavLink>
                                </li>
                            ))
                        }
                    </ul>

                    <Route path='/router/home/messages/detail/:id' component={MessageDetail}/>

                </div>
            </Router>
        )
    }
}

export default Messages;