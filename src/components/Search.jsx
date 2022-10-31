import React, {useState} from "react";

const Search = (props) => {
    const {searchRef, formRef} = props;

    const [search, setSearch] = useState('');

    let typingTimer = null;
    const doneTypingInterval = 1000;

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    const handleKeyUp = () => {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(doneTyping, doneTypingInterval);
    }

    const handleKeyDown = () => {
        clearTimeout(typingTimer);
    }

    const doneTyping = () => {
        formRef.current.requestSubmit();
    }


    return <div className="row">
        <div className="input-field">
            <input
                className="validate"
                ref={searchRef}
                id="search"
                name="search"
                type="search"
                placeholder="Search"
                value={search}
                onChange={handleSearch}
                onKeyUp={handleKeyUp}
                onKeyDown={handleKeyDown}
            />
        </div>
    </div>
}

export {Search};