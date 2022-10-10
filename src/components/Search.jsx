import React, {Component, useRef} from "react";

class Search extends Component {
    constructor() {
        super();

        this.state = {
            search: "",
        }

        this.typingTimer = null;
        this.doneTypingInterval = 1000;
    }

    handleSearch = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleKeyUp = () => {
        clearTimeout(this.typingTimer);
        this.typingTimer = setTimeout(this.doneTyping, this.doneTypingInterval);
    }

    handleKeyDown = () => {
        clearTimeout(this.typingTimer);
    }

    doneTyping = () => {
        this.props.formRef.current.requestSubmit();
        // this.props.callback(this.state.search);
    }

    render() {
        return <div className="row">
            <div className="input-field">
                <input
                    className="validate"
                    ref={this.props.searchRef}
                    id="search"
                    name="search"
                    type="search"
                    placeholder="Search"
                    value={this.state.search}
                    onChange={this.handleSearch}
                    onKeyUp={this.handleKeyUp}
                    onKeyDown={this.handleKeyDown}
                />
            </div>
        </div>
    }
}

export default Search;