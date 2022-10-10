import React, {Component} from "react";
import Search from "./Search";
import Filter from "./Filter";

class Form extends Component {
    state = {
        searchRef: React.createRef(),
        formRef: React.createRef(),
        filterRef: React.createRef(),
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.callback(
            this.state.searchRef.current.value,
            this.state.filterRef.current.querySelector('input[name="type"]:checked').dataset.type
        );
    }

    render() {
        return <form
            ref={this.state.formRef}
            onSubmit={this.handleSubmit}
        >
            <Search
                callback={this.props.callback}
                searchRef={this.state.searchRef}
                formRef={this.state.formRef}
            
            />
            <Filter
                callback={this.props.callback}
                formRef={this.state.formRef}
                filterRef={this.state.filterRef}
            />
        </form>
    }
}

export default Form