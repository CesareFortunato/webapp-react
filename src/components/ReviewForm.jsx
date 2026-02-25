import axios from "axios";
import { useState } from "react";

const endpoint = "http://localhost:3000/api/films/";

const initialData = {
    name: "",
    text: "",
    vote: "", // ← ora è stringa vuota
};

const ReviewForm = ({ movieId, onReviewAdded }) => {
    const [formData, setFormData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value, // ← niente conversione qui
        }));
    };

    const afterSubmit = (insertId) => {
        const newReview = {
            id: insertId,
            ...formData,
            vote: Number(formData.vote), // ← conversione qui per coerenza
            movie_id: Number(movieId),
        };

        onReviewAdded?.(newReview);
        setFormData(initialData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        axios
            .post(`${endpoint}${movieId}/reviews`, {
                ...formData,
                vote: Number(formData.vote), // ← conversione solo qui
            })
            .then((res) => {
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
                        <label className="form-label">Voto (1-5)</label>
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