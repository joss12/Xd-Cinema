

import React, { useEffect} from 'react'
import Card from '../component/Card'
import useFetch from '../hooks/useFetch';
import useTitle from '../hooks/useTitle';

const MovieList = ({api, title}) => {
  // const [movies, setMovies] = useState([]);

  const {data:movies} = useFetch(api);
  useTitle(title);


  return (
    <main>
      <section className='max-w-7xl mx-auto py-7 other:justify-evenly'>
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) =>(
          <Card key={movie.id} movie={movie}/>
          ))}
        </div>
      </section>
    </main>
  )
}

export default MovieList
