import * as React from "react";

class News extends React.Component {

    state = {
        newsArray: [
            '2',
            '3',
            '4'
        ]
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.newsArray.map((news,index) => <li key={index}>{news}</li>)
                    }
                </ul>
            </div>
        )
    }
}

export default News;