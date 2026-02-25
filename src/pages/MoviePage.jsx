import { Link, useParams } from "react-router-dom";
import CardReview from "../components/CardReview";
import ReviewForm from "../components/ReviewForm";
import axios from "axios";
import { useState, useEffect } from "react";

const endpoint = "http://localhost:3000/api/films/";

const MoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    const fetchMovie = () => {
        axios
            .get(endpoint + id)
            .then((res) => setMovie(res.data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchMovie();
    }, [id]);

    const handleReviewAdded = (newReview) => {
        setMovie((prev) => ({
            ...prev,
            reviews: [newReview, ...(prev.reviews || [])],
        }));
    };

    const renderReviews = () =>
        movie.reviews?.map((review) => (
            <CardReview reviewProp={review} key={review.id} />
        ));

    return (
        <>
            <header id="movie" className="border-bottom border-1 mb-3">
                <div className="d-flex mb-3">
                    <img
                        src={movie.image}
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

                <ReviewForm movieId={id} onReviewAdded={handleReviewAdded} />
            </section>

            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">
                    Back to Home
                </Link>
            </footer>
        </>
    );
};

export default MoviePage;