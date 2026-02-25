import { Link, useParams } from "react-router-dom"
import CardReview from "../components/CardReview"
import axios from "axios"
import { useState, useEffect } from "react"
const endpoint = "http://localhost:3000/api/films/"



const MoviePage = () => {

    //prendiamo id dall url
    const { id } = useParams();


    //settiamo var di stato
    const [movie, setMovie] = useState({});


    const fetchMovie = () => {
        axios
            .get(endpoint + id)
            .then((res) => setMovie(res.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchMovie()
    }, [])


    const renderReviews = () => {
        return movie.reviews?.map(review => {
            return (
                <CardReview reviewProp={review} key={review.id} />
            )
        })
    }




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