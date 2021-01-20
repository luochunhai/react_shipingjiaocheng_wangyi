import './App.css';
import * as React from "react";
import CommentAdd from "../comment-add/CommentAdd";
import CommentList from "../comment-list/CommentList";
import PubSub from 'pubsub-js'

class CommentPubSubApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [
                {userName: 'Tom', content: 'React 1'},
                {userName: 'Jack', content: 'React 2'}
            ]
        }

        this.addComment = this.addComment.bind(this);
    }


    addComment(comment) {
        const {comments} = this.state
        //添加到数组第一个
        comments.unshift(comment)
        this.setState({comments})

    }

    componentDidMount() {
        PubSub.subscribe('deleteComment', (msg, index) => {
            const comments = [...this.state.comments]
            comments.splice(index, 1)
            this.setState({comments})
        });
    }

    render() {
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className='container'>
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>please comment PubSub</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addComment={this.addComment}/>
                    <CommentList comments={this.state.comments}/>
                </div>
            </div>
        );
    }
}

export default CommentPubSubApp;
