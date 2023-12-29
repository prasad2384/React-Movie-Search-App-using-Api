import { useEffect, useState } from "react";
import Result from "./components/Result";
import axios from "axios";
function App() {
  const [movies, Setmovies] = useState([]);
  const [search, Setsearch] = useState("");
  const changesearch=(event)=>{
    console.log(event.target.value);
    Setsearch(event.target.value);
  }
  const getAllmovies = () => {
    axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e1d56b3e6ee712e4069131608096cc88").then(
      (response) => {
        console.log(response.data.results);
        Setmovies(response.data.results);
      }
    ).catch(
      (error) => {
        // console.log(error);
      }
    )
  }
  const SearchMovies=()=>{
    axios.get('https://api.themoviedb.org/3/search/movie?&api_key=e1d56b3e6ee712e4069131608096cc88&query='+search).then(
      (response)=>{
        // console.log(response.data.results);
        Setmovies(response.data.results);
      }
    ).catch(
      (error)=>{
        console.log(error);
      }
    )
  }
  useEffect(() => {
    if (search === "") {
      
      console.log("Hello")
      getAllmovies();
    }
    else {
      console.log("error");
      SearchMovies();
    }
  }, [search])
  return (
    <div className="max-w-[1240px] shadow-xl mx-auto min-h-[400px] mt-4 p-4">
      <input type="search" value={search} onChange={changesearch} placeholder="Search Movies" className="p-2 border border-black mx-auto w-full outline-none rounded-xl text-slate-400" id="" />
      {
        movies.length===0?<div className="text-center mt-4 text-3xl font-bold">Loading...</div>:<Result movies={movies} />
      }
      
    </div>
  );
}

export default App;
