import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../Components/MovieCard.module.css'
export function MovieCard({ movie }) {
  // Rest of the code

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired
};
  const imageUrl = `https://image.tmdb.org/t/p/w300`+movie.poster_path;
  return (
    <li className={styles.moviecard}>
      <Link to={"/movies/"+movie.id}>
      <img width={230}
      height={345}
      src={imageUrl}
      alt={movie.title}
      className='movieImage'/>
      <div className={styles.title}>{movie.title}</div>
      </Link>
    </li>
  );
}
