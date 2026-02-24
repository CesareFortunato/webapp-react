import { Link, useParams } from "react-router-dom"
import CardReview from "../components/CardReview"

const MoviePage = () => {
  const { id } = useParams()

  // MOCK (poi diventerà dato dal BE)
  const movie = {
    id,
    title: "Titolo del film",
    director: "Nome regista",
    abstract:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, ad. Nostrum libero omnis odit ex praesentium voluptate eius velit quisquam."
  }

  return (
    <>
      <header id="movie" className="border-bottom border-1 mb-3">
        <div className="d-flex mb-3">
          <img src="https://picsum.photos/300/200" className="card-img-top" alt={movie.title} />
        </div>

        <h1>{movie.title}</h1>
        <h3 className="text-muted"><i>By {movie.director}</i></h3>
        <p>{movie.abstract}</p>
      </header>

      <section id="reviews">
        <header className="d-flex justify-content-between align-items-center mb-4">
          <h4>Our community reviews</h4>
        </header>

        {/* per ora statiche, poi mappiamo un array */}
        <CardReview />
        <CardReview />
        <CardReview />
      </section>

      <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
        <Link className="btn btn-secondary" to="/">Back to Home</Link>
      </footer>
    </>
  )
}

export default MoviePage