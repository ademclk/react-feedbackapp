import { useState } from 'react'

import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackSample from './data/FeedbackSample'

function App() {
  const [feedback, setFeedback] = useState(FeedbackSample)
  
  return (
    <>
      <Header />
      <div className="container">
        <h1>Hello from App component.</h1>
        <FeedbackList feedbacks = {feedback} />
      </div>
    </>
  )
}

export default App
