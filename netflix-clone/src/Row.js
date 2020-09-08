import React, { useState, useEffect } from 'react';
import axios from './axios';

const base_url = "htttps://image.tmdb.org/t/p/original";

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);


    return(
        <div className="row">
           <h2>{title}</h2> 

            <div className="row__posters">
                {/*several row__posters */}
                {movies.map(movie => (
                <img src={`${base_url}${movie.poster_path}`} alt={movie.name}/> 
                ))
                }
                
            </div>

            {/* container -> poster */}
        </div>
    )
}

export default Row;