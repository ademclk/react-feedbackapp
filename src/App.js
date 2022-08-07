import { useState } from 'react'

import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackSample from './data/FeedbackSample'
import FeedbackStats from './components/FeedbackStats'

function App() {
  const [feedback, setFeedback] = useState(FeedbackSample)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedback.filter((item)=> item.id !== id))
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <h1>Hello from App component.</h1>
        <FeedbackStats feedbacks ={feedback} />
        <FeedbackList feedbacks={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
