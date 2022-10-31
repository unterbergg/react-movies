import {useState} from "react";

const Filter = (props) => {
    const {formRef, filterRef} = props;
    const [type, setType] = useState("all");

    const handleChange = (event) => {
        setType(event.target.dataset.type)
        formRef.current.requestSubmit();
    }


    return <fieldset ref={filterRef}>
        <label htmlFor="radio1">
            <input
                className="with-gap"
                name="type"
                type="radio"
                checked={type === "all"}
                onChange={handleChange}
                id="radio1"
                data-type="all"
            />
            <span>All</span>
        </label>
        <label htmlFor="radio2">
            <input
                className="with-gap"
                name="type"
                type="radio"
                checked={type === "movie"}
                onChange={handleChange}
                id="radio2"
                data-type="movie"
            />
            <span>Movie</span>
        </label>
        <label htmlFor="radio3">
            <input
                className="with-gap"
                name="type"
                type="radio"
                checked={type === "series"}
                onChange={handleChange}
                id="radio3"
                data-type="series"
            />
            <span>Series</span>
        </label>
    </fieldset>
}

export {Filter}