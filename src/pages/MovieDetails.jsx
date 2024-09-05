import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../data/httpClient';
import { getMovieImg } from '../utils/getMovieImg';
import './MovieDetails.css'

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    // Obtener detalles de la película
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      console.log(data);
    }).catch(error => {
      console.error("Error fetching movie details:", error);
    });

    // Obtener videos de la película
    get(`/movie/${movieId}/videos`).then((data) => {
      const trailer = data.results.find(video => video.type === "Trailer" && video.site === "YouTube");
      setTrailer(trailer);
    }).catch(error => {
      console.error("Error fetching movie videos:", error);
    });
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const imageUrl = getMovieImg(movie.poster_path, 300);

  return (
    <div className='detailsContainer'>
      <img src={imageUrl} alt={movie.title} className='col movieImage'/>  
      <div className='movieDetails'>
        <p className='title'>
          <strong>Titulo:</strong> {movie.title}
        </p>
        <p className='genre'>
          <strong>Genero:</strong> {movie.genres && movie.genres.length > 0 ? movie.genres[0].name : 'No disponible'}
        </p>
        <p className='overview'>
          <strong>Sipnosis:</strong> {movie.overview}
        </p>
        {trailer && (
          <div className='trailerContainer'>
            <h3>Trailer:</h3>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title={`${movie.title} Trailer`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}