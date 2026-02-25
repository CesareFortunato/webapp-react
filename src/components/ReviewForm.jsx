import axios from "axios";
import { useState } from "react";

const endpoint = "http://localhost:3000/api/films/";

const initialData = {
    name: "",
    text: "",
    vote: 1,
};

const ReviewForm = ({ movieId, onReviewAdded }) => {
    const [formData, setFormData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "vote" ? Number(value) : value,
        }));
    };

    // funzione dopo submit
    const afterSubmit = (insertId) => {
        const newReview = {
            id: insertId,
            ...formData,
            movie_id: Number(movieId),
        };

        // 1) mostra subito la review in pagina
        onReviewAdded?.(newReview);

        // 2) reset del form
        setFormData(initialData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        axios
            .post(`${endpoint}${movieId}/reviews`, formData)
            .then((res) => {
                // il BE ti deve tornare l'id inserito
                afterSubmit(res.data.id);
            })
            .catch((err) => {
                console.log(err);
                setError("Errore nell'invio della review");
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className="card mt-4">
            <div className="card-body">
                <h5 className="card-title">Add a review</h5>

                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Nome autore</label>
                        <input
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Testo review</label>
                        <textarea
                            className="form-control"
                            rows="3"
                            name="text"
                            value={formData.text}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Voto</label>
                        <input
                            type="number"
                            className="form-control"
                            name="vote"
                            min="1"
                            max="5"
                            value={formData.vote}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button className="btn btn-primary" disabled={loading}>
                        {loading ? "Sending..." : "Send review"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ReviewForm;