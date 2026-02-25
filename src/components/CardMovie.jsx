import { Link } from "react-router-dom"

const CardMovie = ({ movieProp }) => {
  return (
    <div className="card mb-4">
      <img src={movieProp.image} className="card-img-top" alt={movieProp.title} />
      <div className="card-body">
        <h5 className="card-title">{movieProp.title}</h5>
        <address className="mb-2"><i>{movieProp.director}</i></address>

        <p className="card-text">
          {movieProp.abstract}
        </p>

        <Link to={`/films/${movieProp.id}`} className="btn btn-primary">
          See more
        </Link>
      </div>
    </div>
  )
}

export default CardMovie