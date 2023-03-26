
import {Routes, Route,Outlet} from 'react-router-dom';
// import {Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet} from 'react-router-dom';
import MovieDetails from '../pages/MovieDetails';
import MovieList from '../pages/MovieList';
import PageNotFound from '../pages/PageNotFound';
import Search from '../pages/Search';




import React from 'react'

export const AllRoutes = () => {
  return (
    <div className='bg-slate-100'>
        <Routes>
            <Route path="/" element={<MovieList api="movie/now_playing" title="Home" />} />
            <Route path="movie/:id" element={<MovieDetails />} />
            <Route path="movies/popular" element={<MovieList api="movie/popular" title="popular" />} />
            <Route path="movies/top" element={<MovieList api="movie/top_rated" title="Top Rated" />} />
            <Route path="movies/upcoming" element={<MovieList api="movie/upcoming" title="Upcoming" />} />
            <Route path="search" element={<Search api="search/movie" />} />
            <Route path="*" element={<PageNotFound title="Page Not Found" />} />
        </Routes>
    </div>
  )
}



