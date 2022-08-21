import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [warning, setWarning] = useState('');

  const handleTextChange = (e) => {

    if (text === '') {
      setBtnDisabled(true);
    } else if (text !== '' && text.trim().length < 30) {
      setWarning ('Text must be less than 30 characters');
      setBtnDisabled(true);
    } else {
      setWarning(null)
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>Rate our service, please.</h2>
        {/*@ToDo - rating select component. */}
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
  );
}

export default FeedbackForm;
