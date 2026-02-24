import CardMovie from "../components/CardMovie"
import axios from "axios"
import { useState, useEffect } from "react"

const endpoint = "http://localhost:3000/api/films"

const HomePage = () => {
    const [movies, setMovies] = useState([])

    const fetchMovies = () => {
        axios
            .get(endpoint)
            .then((res) => setMovies(res.data))
            .catch((err) => console.log(err))
    }

    const renderMovies = () => {
        return movies.map((movie) => (
            <div className="col" key={movie.id}>
                <CardMovie movie={movie} />
            </div>
        ))
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <>
            <h1 className="text-primary">Boolbuster</h1>
            <h2><i>The boolean nerd movie community</i></h2>

            <div className="row row-cols-3 mt-4">
                {renderMovies()}
            </div>
        </>
    )
}

export default HomePage