import * as React from "react";
import PubSub from 'pubsub-js';

class SearchPubSub extends React.Component {


    search = () => {
        const searchName = this.inputName.value.trim()
        if (searchName) {
            PubSub.publish('search', searchName);
        }
    }


    render() {

        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search GitHub Users</h3>
                    <div>
                        {/*受控组件*/}
                        {/*<input type="text" placeholder="enter the name you search" value={this.state.inputName} onChange={this.handleNameChange}/>*/}
                        <input type="text" placeholder="enter the name you search"
                               ref={input => this.inputName = input}/>
                        <button onClick={this.search}>Search</button>
                    </div>
                </section>

            </div>
        )
    }

}

export default SearchPubSub;