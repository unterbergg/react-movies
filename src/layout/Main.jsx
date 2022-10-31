import React, {useState, useEffect} from "react";
import {List} from "../components/List";
import {Form} from "../components/Form";
import {Preloader} from "../components/Preloader";

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = (props) => {
    const url = "https://www.omdbapi.com/?";

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);


    const componentDidMount = () => {
        fetch(`${url}s=matrix&apikey=${API_KEY}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setPosts(data.Search);
                setIsLoaded(true);
            });
    }

    useEffect(() => {
        if(!isLoaded) {
            fetch(`${url}s=matrix&apikey=${API_KEY}`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setPosts(data.Search);
                    setIsLoaded(true);
                });
        }
    }, [posts])

    const searchMovies = (value, filter) => {
        setIsLoaded(false);
        fetch(`${url}s=${value ? value : "matrix"}&${(filter === "all" ? "" : `type=${filter}&`)}apikey=${API_KEY}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const {Response, Search, Error} = data;
                if(Response === 'True') {
                    setPosts(Search);
                    setError("");
                } else {
                    setError(Error);
                    setPosts([]);
                }
                setIsLoaded(true);
            });
    }

    return <main className="content">
        <div className="container">
            <Form callback={searchMovies} />
            {
                (isLoaded) ?
                    <List posts={posts} error={error} /> :
                    <Preloader />
            }
        </div>
    </main>
}

export {Main}