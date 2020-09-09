import React, { useState,useEffect } from 'react'
import axios from "./axios";
import requests from "./requests"

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){

        }
        fetchData();
    }, [])


    return (
        <header>
            
        </header>
    )
}

export default Banner
