const CardReview = ({ reviewProp }) => {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <p className="card-text">
                    {reviewProp.text}
                </p>

                <strong>Vote: {reviewProp.vote}</strong>

                <address className="mb-0">
                    <i>By {reviewProp.name}</i>
                </address>
            </div>
        </div>
    )
}

export default CardReview