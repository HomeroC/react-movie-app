import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import MovieScreen from "./components/MovieScreen";
import Watchlist from "./components/Watchlist";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [page, setPage] = useState(1);

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);


  const addMovie = (movie) => { 
    setWatchlist([...watchlist, movie])
  }
  const removeMovie = (movie) => {
    const newState = watchlist.filter((item) => {
      return item !== movie
    })
    setWatchlist(newState)
}

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          addMovie={addMovie}
          list={watchlist}
          page={page}
          setPage={setPage}
          movieList={movieList}
          removeMovie={removeMovie}
        />
        <Watchlist list={watchlist} removeMovie={removeMovie} />
      </main>
    </div>
  );
}

export default App;
