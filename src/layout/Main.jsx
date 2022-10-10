import React, {Component} from "react";
import List from "../components/List";
import Form from "../components/Form";
import {Preloader} from "../components/Preloader";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
    url = "https://www.omdbapi.com/?";

    state = {
        posts : [],
        error : "",
        isLoaded : false,
    }

    componentDidMount = () => {
        fetch(`${this.url}s=matrix&apikey=${API_KEY}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({posts : data.Search, isLoaded : true});
            });
    }

    searchMovies = (value, filter) => {
        this.setState({isLoaded : false}, () => {
            fetch(`${this.url}s=${value ? value : "matrix"}&${(filter === "all" ? "" : `type=${filter}&`)}apikey=${API_KEY}`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    const {Response, Search, Error} = data;
                    Response === 'True' ?
                        this.setState({posts : Search, isLoaded : true, error : ""})
                        : this.setState({error : Error, posts : [], isLoaded : true});
                });
        })
    }

    render() {
        const {posts, error, isLoaded} = this.state

        return <main className="content">
            <div className="container">
                <Form callback={this.searchMovies} />
                {
                    (isLoaded) ?
                        <List posts={this.state.posts} error={this.state.error} /> :
                        <Preloader />
                }
            </div>
        </main>
    }
}

export default Main