import * as React from "react";
import {NavLink, Route} from "react-router-dom";
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

    showMessageDetailPush = (id) => {
        this.props.history.push(`/router/home/messages/detail/${id}`)
    }

    showMessageDetailReplace = (id) => {
        this.props.history.replace(`/router/home/messages/detail/${id}`)
    }

    back = () => {
        this.props.history.goBack()
    }

    forward = () => {
        this.props.history.goForward()
    }


    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((msg, index) => (
                            <li key={index}>
                                <NavLink to={`/router/home/messages/detail/${msg.id}`}>{msg.title}</NavLink>
                                &nbsp;&nbsp;
                                <button onClick={this.showMessageDetailPush.bind(this, msg.id)}>push detail</button>
                                &nbsp;&nbsp;
                                <button onClick={() => {
                                    this.showMessageDetailReplace(msg.id)
                                }}>replace detail
                                </button>
                            </li>
                        ))
                    }
                </ul>
                <p>
                    <button onClick={this.back}>back</button>
                    <button onClick={this.forward}>forward</button>
                </p>

                <Route path='/router/home/messages/detail/:id' component={MessageDetail}/>

            </div>
        )
    }
}

export default Messages;