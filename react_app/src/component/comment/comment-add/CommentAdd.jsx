import * as React from "react";

class CommentAdd extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            content: ''
        }
    }

    handleSubmit = () => {
        const comment = this.state
        this.props.addComment(comment)

        this.setState({
            userName: '',
            content: ''
        })
    }

    handleUserNameChange = (event) => {
        const userName = event.target.value
        this.setState({userName})
    }


    handleContentChange = (event) => {
        const content = event.target.value
        this.setState({content})
    }

    render() {
        const {userName, content} = this.state
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>user name</label>
                        <input type="text" className="form-control" placeholder="用户名" value={userName}
                               onChange={this.handleUserNameChange}/>
                    </div>
                    <div className="form-group">
                        <label>comment content</label>
                        <textarea rows="6" className="form-control" placeholder="评论内容" value={content}
                                  onChange={this.handleContentChange}/>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right"
                                    onClick={this.handleSubmit}>提交
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default CommentAdd;