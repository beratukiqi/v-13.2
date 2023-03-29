import MovieCard from "./MovieCard";

function DisplayMovies({ searchResult }) {
    return (
        <section>
            DisplayMovies Komponent{" "}
            {console.log(searchResult, " DISPLAY MOVIES COMPONENT")}
            {/* {resultList.map((item) => {
                console.log(item);
            })} */}
            {searchResult &&
                searchResult.Search.map((item) => {
                    <MovieCard item={item} />;
                })}
        </section>
    );
}

export default DisplayMovies;
