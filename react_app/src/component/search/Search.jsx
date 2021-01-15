import * as React from "react";

class Search extends React.Component {

    render() {

        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search GitHub Users</h3>
                    <div>
                        <input type="text" placeholder="enter the name you search"/>
                        <button>Search</button>
                    </div>
                </section>

            </div>
        )
    }

}

export default Search;