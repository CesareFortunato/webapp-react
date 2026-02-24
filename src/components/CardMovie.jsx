import { Link } from "react-router-dom"

const CardMovie = ({ movie }) => {
  return (
    <div className="card mb-4">
      <img src="https://picsum.photos/300/200" className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <address className="mb-2"><i>{movie.director}</i></address>

        <p className="card-text">
          {movie.abstract}
        </p>

        <Link to={`/films/${movie.id}`} className="btn btn-primary">
          See more
        </Link>
      </div>
    </div>
  )
}

export default CardMovie