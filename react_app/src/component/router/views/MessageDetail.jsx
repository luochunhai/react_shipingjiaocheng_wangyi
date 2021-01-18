import * as React from "react";

const allMsg = [
    {id: '1', title: 'message1', content: "content1"},
    {id: '2', title: 'message2', content: "content2"},
    {id: '3', title: 'message3', content: "content3"},
]

export default class MessageDetail extends React.Component {

    render() {

        const {id} = this.props.match.params;
        const message = allMsg.find((m) => m.id === id)
        return (

            <ul>
                <li>ID: {message.id}</li>
                <li>TITLE: {message.title} </li>
                <li>CONTENT:{message.content} </li>

            </ul>
        )
    }

}