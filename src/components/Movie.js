import React, { useEffect, useState } from 'react';
import './Movie.css'; // Import CSS file for styling
import Menu from './Menu';


function Movie() {
    const [movieList, setMovieList] = useState([]);

    const getMovie = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`) 
        .then(res => res.json())
        .then(json => setMovieList(json.results))
        .catch(error => console.error('Error fetching movies:', error));
    }

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            <Menu /> {/* Include the Menu component */}
            <div className="movie-container"> {/* Apply styling to movie container */}
                {movieList.map((movie) => (
                    <img key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movie-poster" />
                ))}
            </div>
        </div>
    );
}

export default Movie;

