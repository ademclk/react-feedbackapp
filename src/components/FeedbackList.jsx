import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedbacks }) {
    if (!feedbacks || feedbacks.length === 0) {
        return <p>Out of feedbacks, please try again later.</p>
    }

    return (
        <div className="feedback-list">
            {feedbacks.map((item) => (
                <FeedbackItem key={item.id} item={item} />
            ))}
        </div>
    )
}

export default FeedbackList