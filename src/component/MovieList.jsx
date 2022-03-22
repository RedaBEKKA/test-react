import React, { useState } from 'react'
import Axios from "axios";
import MovieCard from "./MovieCard";
import queryString from "query-string";
import { useLocation } from "react-router-dom"
import Home from './Home';
export default function MovieList() {
    const [movies, setMovies] = useState([]);
    const [film,setFilms] = useState([]);
    let location = useLocation();
    const apiUrl = 'https://api.themoviedb.org/3';
    const apiKey = 'api_key=8c247ea0b4b56ed2ff7d41c9a833aa77';
    React.useEffect(() => {
        listAllMovies();
    }, [])
    const listAllMovies = () => {
        let q = queryString.parse(location.search)
        return Axios.get(`${apiUrl}/movie/popular?${apiKey}`)
            .then(resp =>{
                console.log(resp.data,' data')
                let result = resp?.data.results.slice(0,10)
                setMovies(result)
              
                setFilms(transformTable(resp?.data.results.slice(10)))
            })
    };
    let table = []
    const transformTable = (movie) =>{
       
        movie.map(e=>{
            e={
                image:"https://image.tmdb.org/t/p/w500/"+e.poster_path,
                caption:e.title
            }
            table.push(e)
        })
        console.log(table," tableau")

        return table
    }
    return (
        <div className='row'>

            {
                movies.map(film => (<>
                    <MovieCard movie={film} key={film.id} />                  
                </>
                ))                
            }           
            <Home movie={film} />        
            
           
        </div>
    )
}

