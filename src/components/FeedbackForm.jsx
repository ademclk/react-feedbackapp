import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingValue from './RatingValue'

function FeedbackForm({handleAdd}) {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [warning, setWarning] = useState('')

  const handleTextChange = (e) => {
    if (text === '') { 
      setBtnDisabled(true)
    } else if (text !== '' && text.trim().length < 30) {
      setWarning('Text must be less than 30 characters')
      setBtnDisabled(true)
    } else {
      setWarning(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 30) {
      const newFeedback = {
        text,
        rating
      }
      handleAdd(newFeedback)

      setText('')
      setBtnDisabled (true)
    }
  }


  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Rate our service, please.</h2>
        <RatingValue select={(rating) => console.log(rating)} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Send your feedback'
            value={text}
          />
          <Button type='submit' version='primary' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {warning && <div className='warning'>{warning}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
