import * as React from "react";

class Search extends React.Component {

    state = {
        inputName: ''
    }

    //受控组建
    // handleNameChange = (event) => {
    //     const inputName = event.target.value
    //     this.setState({inputName})
    //
    //
    // }

    search = () => {
        //受控组件
        // const {setSearchName} = this.props
        // setSearchName(this.state.inputName);

        //非受控组件
        const searchName = this.inputName.value.trim()
        this.props.setSearchName(searchName)
    }


    render() {

        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search GitHub Users</h3>
                    <div>
                        {/*受控组件*/}
                        {/*<input type="text" placeholder="enter the name you search" value={this.state.inputName} onChange={this.handleNameChange}/>*/}
                        <input type="text" placeholder="enter the name you search" ref={input => this.inputName = input}/>
                        <button onClick={this.search}>Search</button>
                    </div>
                </section>

            </div>
        )
    }

}

export default Search;