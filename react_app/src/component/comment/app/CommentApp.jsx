import './App.css';
import * as React from "react";
import CommentAdd from "../comment-add/CommentAdd";
import CommentList from "../comment-list/CommentList";

class CommentApp extends React.Component {

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

        //添加到最后一个
        // this.setState({
        //     comments: [...comments, comment]
        // })
    }

    deleteComment = (index) => {
        const comments = [...this.state.comments]
        comments.splice(index, 1)
        this.setState({comments})
    }

    render() {
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className='container'>
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>please comment</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addComment={this.addComment}/>
                    <CommentList comments={this.state.comments} deleteComment={this.deleteComment}/>
                </div>
            </div>
        );
    }
}

export default CommentApp;
