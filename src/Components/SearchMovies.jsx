import { useEffect, useState } from "react";
import DisplayMovies from "./DisplayMovies";

function SearchMovies({ searchResult }) {
    return (
        <div>
            {console.log(searchResult, " SEARCH MOVIES COMPONENT")}
            <h1>Search bar här</h1>
            <DisplayMovies searchResult={searchResult} />
        </div>
    );
}

export default SearchMovies;
