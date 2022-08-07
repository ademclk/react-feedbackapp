import PropTypes from 'prop-types';

function FeedbackStats({ feedbacks }) {

    let averageRating = feedbacks.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.rating;
    }, 0) / feedbacks.length;

    averageRating = averageRating.toFixed(1).replace(/\.0$/, '');

    return (
        <div className="feedback-stats">
            <h4>{feedbacks.length} Reviews</h4>
            <h4>Average Rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedbacks: PropTypes.array.isRequired,
}

export default FeedbackStats