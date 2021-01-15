import * as React from "react";
import './style.css'

class CommentItem extends React.Component {

    handleClick = () => {
        const {comment, deleteComment, index} = this.props
        if (window.confirm(`确定删除${comment.userName}的评论吗？`)) {
            deleteComment(index)
        }
    }

    render() {
        const {comment} = this.props
        return (
            <div>
                <li className="list-group-item">
                    <div className="handle">
                        <button onClick={this.handleClick}>删除</button>
                    </div>
                    <p className="user"><span>{comment.userName}</span><span>说: </span></p>
                    <p className="contence">{comment.content}</p>
                </li>
            </div>
        );
    }
}

export default CommentItem;