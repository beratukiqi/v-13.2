import "./App.css";
import { useState, useEffect } from "react";
import SearchMovies from "./Components/SearchMovies";
const API_KEY = "37fe945a";
let searchTerm = "Harry Potter";
const API_ENDPOINT = "http://www.omdbapi.com";
let URL = API_ENDPOINT + "/?apikey=" + API_KEY + "&s=" + searchTerm;

function App() {
    const [searchResult, setSearchResult] = useState();

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                setSearchResult(data);
            });
    }, []);

    return (
        <div className="App">
            <SearchMovies searchResult={searchResult} />
        </div>
    );
}

export default App;
