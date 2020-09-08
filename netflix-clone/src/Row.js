import React, { useState, useEffect } from 'react';
import axios from './axios';

function Row({title}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetch() {
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
                  <img src="{'${base_url}${movie.poster_path}'} alt={movie.name}"/> 
                ))}
            </div>

            {/* continer -> poster */}
        </div>
    )
}

export default Row;