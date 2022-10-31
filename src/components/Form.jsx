import React, {useRef} from "react";
import {Search} from "./Search";
import {Filter} from "./Filter";

const Form  = (props) => {
    const {
        callback = Function.prototype,
    } = props;

    const searchEl = useRef(null);
    const formEl = useRef(null);
    const filterEl = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        callback(
            searchEl.current.value,
            filterEl.current.querySelector('input[name="type"]:checked').dataset.type
        );
    }


    return <form
        ref={formEl}
        onSubmit={handleSubmit}
    >
        <Search
            callback={callback}
            searchRef={searchEl}
            formRef={formEl}

        />
        <Filter
            callback={callback}
            formRef={formEl}
            filterRef={filterEl}
        />
    </form>
}

export {Form}