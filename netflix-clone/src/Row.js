import React, { useState, useEffect } from 'react';
import axios from './axios';

function Row({title}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetch() {
            const request = await.get(fetchUrl);
            console
        }
        fetchData();
    }, []);

    return(
        <div>
           <h2>{title}</h2> 


            {/* continer -> poster */}
        </div>
    )
}

export default Row;