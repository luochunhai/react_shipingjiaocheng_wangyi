import * as React from "react";
import axios from 'axios';

class UserList extends React.Component {

    state = {
        initView: true,
        loading: false,
        users: null,
        errorMsg: null
    }

    //当组建接收到新的属性时，回调
    //制定了新的searchName, 需要请求
    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        const {searchName} = nextProps
        this.setState({
            initView: false,
            loading: true
        })

        const url = `https://api.github.com/search/users?q=${searchName}`
        axios.get(url)
            .then(response => {
                const result = response.data
                const users = result.items.map(item => {
                    return {name: item.login, url: item.html_url, avatarUrl: item.avatar_url}
                })

                this.setState({users: users, loading: false})
            })
            .catch(error => {
                this.setState({loading: false, errorMsg: error.message})
            })
    }

    render() {
        const {initView, loading, users, errorMsg} = this.state
        const {searchName} = this.props
        if (initView) {
            return <h2>请输入关键字进行搜索: {searchName}</h2>
        } else if (loading) {
            return <h2>正在请求中...</h2>
        } else if (errorMsg) {
            return <h2>{errorMsg}</h2>
        } else {
            return (
                <div className="row">
                    {
                        users.map((user, index) => (
                            <div key={index} className="card">
                                <a href={user.url} target="_bland">
                                    <img alt="ddd" src={user.avatarUrl}
                                         style={{width: 100}}/>
                                </a>
                                <p className="card-text">{user.name}</p>
                            </div>
                        ))
                    }

                </div>
            )
        }

    }

}

export default UserList;