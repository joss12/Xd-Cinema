
import React,{useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import backup from '../assets/backup.jpg';
import useTitle from '../hooks/useTitle';

const MovieDetails = ({title}) => {

  const params = useParams();
  const [data, setData] = useState({});
  const image = data.poster_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`: backup;

  const page = useTitle(data.title)

  useEffect(()=>{
    async function fetchMovie(){
      const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=da56d7f7c8697a4251ed2a899c0a1cc3`);
      const json = await res.json();
      setData(json);
    }
    fetchMovie()
  }, [params.id])


  return (
    <main>
      <section className='flex justify-around flex-wrap py-5'>
        <div className='max-w-sm'>
          <img src={image} alt={data.title} />
        </div>

        <div className='max-w-2xl text-gray-700 text-lg darj:white '>
          <h1 className='text-4xl font-bold my-3 text-center lg:text-left'>{data.title}</h1>
          <p className="my-4">{data.overview}</p>

            {data.genres ?
            (<p className="my-7 flex flex-wrap gap-2">


            {data.genres.map((genre, idx)=>(
            <span 
            className='text-white mr-2 bg-blue-500 rounded dark:border-blue-100 p-2 hover:bg-blue-600 ' key={genre.idx}>
              {genre.name}
              </span>
            ))}
          </p>) : ""}

            <div className="flex items-center">
          <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <p className="ml-2 text-dark-900 dark:text-white">{data.vote_average}</p>
          <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
          <span className="text-gray-900  dark:text-white">{data.vote_count}</span>
      </div>

            <p className='my-4'>
              <span  className='mr-2 font-bold'>Runtime: </span>
              <span>{data.runtime} min.</span>
            </p>


            <p className='my-4'>
              <span  className='mr-2 font-bold'>Budget: </span>
              <span>{data.budget}</span>
            </p>


            <p className='my-4'>
              <span  className='mr-2 font-bold'>Release Date: </span>
              <span>{data.release_date}</span>
            </p>


            <p className='my-4'>
              <span  className='mr-2 font-bold'>Link: </span>
              <a>
                <Link to={`https://www.imdb.com/title/${data.imdb_id}`} 
                target='_blank' rel='noreferrer'>{data.imdb_id}</Link>
                </a>
            </p>

        </div>
      </section>
    </main>
  );
}

export default MovieDetails
