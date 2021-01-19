import * as React from "react";
import './style.css'
import CommentItem from "../comment-item/CommentItem";

class CommentList extends React.Component {

    render() {
        const {comments} = this.props
        const display = comments.length === 0 ? 'block' : 'none'
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复: </h3>
                <h2 style={{display: display}}>暂无评论，点击左侧添加评论！</h2>
                <ul className="list-group">
                    {
                        comments.map((item, index) =>
                            <CommentItem
                                key={index}
                                comment={item}
                                index={index}
                                />)
                    }
                </ul>
            </div>
        );
    }
}

export default CommentList;