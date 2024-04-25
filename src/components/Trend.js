import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import './Trend.css'

function Trend() {
    const [trendList, setTrendList] = useState([]);

    const getTrends = () => {
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(data => setTrendList(data.results))
            .catch(error => console.error('Error fetching the data', error));
    }

    useEffect(() => {
        getTrends();
    }, []);

    console.log(trendList);

   const [count,setCount] = useState(0)

   function handleClick(){
    setCount(count+1)
   }

    return (
        <>
    <Menu />
    <div className="movie-container">
        {trendList.slice(0,10).map((movie) => (
            <div key={movie.id} className="movie-container">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movie-poster" />
                <button onClick={handleClick}>👍 {count} </button>
            </div>
        ))}
    </div>
</>

    );
}

export default Trend;
