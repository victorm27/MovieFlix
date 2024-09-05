import { useEffect, useState } from 'react';
import { get } from '../data/httpClient';
import { MovieCard } from './MovieCard';
import "../Components/ContextMovieCard.css";
import backgroundVideo from '../img/background4.mp4';  // Asegúrate de que esta ruta sea correcta

export function ContextMovieCard() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
      console.log(data.results);
    });
  }, []);

  return (
    <div className="video-background-container">
      <video autoPlay loop muted className="video-background">
        <source src={backgroundVideo} type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <ul className='container'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}