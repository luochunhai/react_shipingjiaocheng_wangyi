import './App.css';
import * as React from "react";
import CommentAdd from "../../components/comment-add/CommentAdd";
import CommentList from "../../components/comment-list/CommentList";
import {connect} from 'react-redux'
import {addComment, deleteComment, getComments} from '../../redux/actions'

class CommentReduxApp extends React.Component {

    componentDidMount() {
        this.props.getComments()
    }

    render() {
        const {comments, addComment, deleteComment} = this.props
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className='container'>
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>CommentReduxApp</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addComment={addComment}/>
                    <CommentList comments={comments} deleteComment={deleteComment}/>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({comments: state}), {addComment, deleteComment, getComments}
)(CommentReduxApp);
