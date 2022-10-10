import {Component} from "react";

class Filter extends Component {
    state = {
        type: "all",
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.dataset.type});
        this.props.formRef.current.requestSubmit();
    }

    render() {
        return <fieldset ref={this.props.filterRef}>
            <label htmlFor="radio1">
                <input
                    className="with-gap"
                    name="type"
                    type="radio"
                    checked={this.state.type === "all"}
                    onChange={this.handleChange}
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
                    checked={this.state.type === "movie"}
                    onChange={this.handleChange}
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
                    checked={this.state.type === "series"}
                    onChange={this.handleChange}
                    id="radio3"
                    data-type="series"
                />
                <span>Series</span>
            </label>
        </fieldset>
    }
}

export default Filter