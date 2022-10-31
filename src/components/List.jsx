import {useEffect} from "react";
import {Card} from "./Card";

const List = (props) => {

    useEffect(() => {
        const post = fetch('')
    })


    const {posts, error} = props;
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

export {List}