const CardReview = ({ review }) => {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <p className="card-text">
                    {review.text}
                </p>

                <strong>Vote: {review.vote}</strong>

                <address className="mb-0">
                    <i>By {review.name}</i>
                </address>
            </div>
        </div>
    )
}

export default CardReview