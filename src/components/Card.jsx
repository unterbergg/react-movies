import {useState} from "react";
import {Preloader} from "./Preloader";

const Card = (props) => {
    const {Title : title, Poster : poster, Year : year, Type : type, imdbID: id} = props;

    const url = "http://www.omdbapi.com/?";
    const apiKey = "fad743b6";

    const [info, setInfo] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    const searchInfo = (id) => {
        fetch(`${url}i=${id}&apikey=${apiKey}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const {Response, Plot, Error} = data;
                Response === 'True' ? setInfo(Plot) : setInfo(Error);
                setIsLoaded(true);
            });
    }



    return (
        <div id={id} className="card movie">
            <div className="card-image waves-effect waves-block waves-light" onClick={() => searchInfo(id) }>
                {
                    poster !== "N/A" ?
                        <img className="activator" src={poster} />
                        : <img className="activator" src={`https://via.placeholder.com/468x500?text=${title}`} />
                }
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    {title} - {year}
                    <i className="material-icons right show-more" onClick={() => searchInfo(id) }>
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
                    (isLoaded) ?
                        <p>{info}</p>
                        : <Preloader />
                }

            </div>
        </div>
    );
}

export {Card}