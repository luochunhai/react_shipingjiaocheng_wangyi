import * as React from "react";

class Messages extends React.Component {

    state = {
        messages: []
    }

    componentDidMount() {
        setTimeout(() => {
            const messages = [
                {id: 1, title: 'message1'},
                {id: 2, title: 'message2'},
                {id: 3, title: 'message3'},
            ]
            this.setState({messages})
        }, 1000)
    }

    render() {
        return (
            <div>
                {
                    this.state.messages.map((msg, index) => (
                        <li key={index}>
                             {/*eslint-disable-next-line*/}
                            <a hred="???">{msg.title}</a>
                        </li>
                    ))
                }
            </div>
        )
    }
}

export default Messages;