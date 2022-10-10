import React, {Component} from "react";
import Card from "./Card";

class List extends Component {

    componentDidMount() {
        const post = fetch('')
    }

    render() {
        const {posts, error} = this.props;
        return error === "" ?
            (
                <div className='movies'>
                    {posts.map(post => (
                        <Card key={post.imdbID} {...post}/>
                    ))}
                </div>
            )
            : (
                <p className="no-result">
                    {error}
                </p>
            )
    }
}

export default List