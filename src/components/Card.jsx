import React, {Component} from "react";
import {Preloader} from "./Preloader";

class Card extends Component {
    url = "http://www.omdbapi.com/?";
    apiKey = "fad743b6";
    state = {
        info : "",
        isLoaded : false
    }
    searchInfo = (id) => {
        fetch(`${this.url}i=${id}&apikey=${this.apiKey}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const {Response, Plot, Error} = data;
                Response === 'True' ?
                    this.setState({info : Plot, isLoaded : true})
                    : this.setState({info : Error, isLoaded : true});
            });
    }

    render() {
        const {Title : title, Poster : poster, Year : year, Type : type, imdbID: id, info} = this.props;

        return (
            <div id={id} className="card movie">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        poster !== "N/A" ?
                            <img className="activator" src={poster} />
                            : <img className="activator" src={`https://via.placeholder.com/468x500?text=${title}`} />
                    }
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">
                        {title} - {year}
                        <i className="material-icons right show-more" onClick={() => this.searchInfo(id) }>
                            more_vert
                        </i>
                    </span>
                    <p>
                        {type}
                    </p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                        {title}
                        <i className="material-icons right">
                            close
                        </i>
                    </span>
                    {
                        (this.state.isLoaded) ?
                            <p>{this.state.info}</p>
                            : <Preloader />
                    }

                </div>
            </div>
        );
    }
}

export default Card