import { Link } from "react-router-dom"

const CardMovie = () => {
return (
    <div className="card mb-4">
        <img src="https://picsum.photos/300/200" className="card-img-top" alt="titolo_del_film" />
        <div className="card-body">
            <h5 className="card-title">Titolo film</h5>
            <address><i>Regista</i></address>
            <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptatem repellat quam nihil perspiciatis, 
                deleniti placeat unde earum adipisci impedit 
                excepturi eligendi soluta deserunt expedita qui aspernatur et ipsam consectetur laudantium.
            </p>
            <Link to={`films/2`} className="btn btn-primary">See more</Link>
        </div>

    </div>
)
}

export default CardMovie