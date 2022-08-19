import { useState } from "react";
import Card from "./shared/Card";

function FeedbackForm() {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
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
          <button type='submit'>Send</button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
