import { Link, useParams } from "react-router-dom"
import CardReview from "../components/CardReview"

const movie = {
    "id": 2,
    "title": "The Godfather",
    "director": "Francis Ford Coppola",
    "genre": "Crime",
    "release_year": 1972,
    "abstract": "The story of a powerful Italian-American crime family and their struggles.",
    "image": "interstellar.jpg",
    "created_at": "2024-11-29T10:40:13.000Z",
    "updated_at": "2025-05-22T10:55:27.000Z",
    "reviews": [
        {
            "id": 4,
            "movie_id": 2,
            "name": "Diana",
            "vote": 5,
            "text": "The best crime movie ever made.",
            "created_at": "2024-11-29T10:40:13.000Z",
            "updated_at": "2024-11-29T10:40:13.000Z"
        },
        {
            "id": 5,
            "movie_id": 2,
            "name": "Eve",
            "vote": 5,
            "text": "A cinematic classic that never gets old.",
            "created_at": "2024-11-29T10:40:13.000Z",
            "updated_at": "2024-11-29T10:40:13.000Z"
        },
        {
            "id": 6,
            "movie_id": 2,
            "name": "Frank",
            "vote": 4,
            "text": "A bit slow-paced but very impactful.",
            "created_at": "2024-11-29T10:40:13.000Z",
            "updated_at": "2024-11-29T10:40:13.000Z"
        }
    ]
}



const MoviePage = () => {

    const renderReviews = () => {
        return movie.reviews.map(review => {
            return (
                <CardReview reviewProp={review} key={review.id} />
            )
        })
    }
    const { id } = useParams()



    return (
        <>
            <header id="movie" className="border-bottom border-1 mb-3">
                <div className="d-flex mb-3">
                    <img
                        src="https://picsum.photos/300/200"
                        className="card-img-top"
                        alt={movie.title}
                    />
                </div>

                <h1>{movie.title}</h1>
                <h3 className="text-muted">
                    <i>By {movie.director}</i>
                </h3>

                <p>{movie.abstract}</p>
            </header>

            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                </header>
                {renderReviews()}

            </section>

            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">
                    Back to Home
                </Link>
            </footer>
        </>
    )
}

export default MoviePage