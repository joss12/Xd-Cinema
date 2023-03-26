import React, { useState, useEffect } from 'react'


const useFetch = (api, queryTerm="") => {
    const [data, setDate] =useState([]);
    const url = `https://api.themoviedb.org/3/${api}?api_key=da56d7f7c8697a4251ed2a899c0a1cc3&query=${queryTerm}`;


    useEffect(()=>{
        async function fetchMovies(){
          const res = await fetch(url);
          const json =  await res.json()
          setDate(json.results);
        }
        fetchMovies();
      }, [url])
  return {data}
}

export default useFetch
