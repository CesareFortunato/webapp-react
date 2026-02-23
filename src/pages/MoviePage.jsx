import { Link } from "react-router-dom"

import CardReview from "../components/CardReview"

const MoviePage = () => {
    return (
        <>
            <header id="movie" className="border-bottom border-1 mb-3">
                <div className="d-flex mb-3">
                    <img src="https://picsum.photos/300/200" className="card-img-top" alt="titolo_del_film" />
                </div>
                <h1>Titolo del film</h1>
                <h3 className="text-muted"><i>By nome regista</i></h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, ad.
                    Nostrum libero omnis odit ex praesentium voluptate eius velit quisquam laboriosam!
                    Culpa quas dolorem temporibus quos ratione quae, numquam corrupti?</p>
            </header>
            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                </header>

                <CardReview />
                <CardReview />
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