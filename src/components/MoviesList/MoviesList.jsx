import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LiStyle, UlStyle, WrapCardStyle } from './MoviesList.styled';

const MoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <UlStyle>
      {films.map(({ id, title, overview, poster_path }) => (
        <LiStyle key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w154${poster_path}`
                  : 'https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg'
              }
              alt={title}
              width="154"
              height="231"
            />
            <WrapCardStyle>
              <h3>{title}</h3>
              <p>{overview}</p>
            </WrapCardStyle>
          </Link>
        </LiStyle>
      ))}
    </UlStyle>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default MoviesList;
