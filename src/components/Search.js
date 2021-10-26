import React from 'react';

const SearchBar = () => (
    <form >
    
        <input
            type="text"
            id="header-search"
            placeholder="github handle"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;