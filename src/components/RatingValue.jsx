import { useState } from 'react'

function RatingValue({ select }) {
  const [selectedValue, setValue] = useState(10)

  const handleChange = (e) => {
    setValue (+e.currentTarget.value)
    select(selectedValue)
  }

  return (
    <ul className='rating'>
      <li>
        <input
          type='radio'
          id='rating-value-1'
          name='rating'
          value='1'
          onChange={handleChange}
          checked={selectedValue === 1}
        />
        <label htmlFor='rating-value-1'>1</label>
      </li>
      <li>
        <input
          type='radio'
          id='rating-value-2'
          name='rating'
          value='2'
          onChange={handleChange}
          checked={selectedValue === 2}
        />
        <label htmlFor='rating-value-2'>2</label>
      </li>
      <li>
        <input
          type='radio'
          id='rating-value-3'
          name='rating'
          value='3'
          onChange={handleChange}
          checked={selectedValue === 3}
        />
        <label htmlFor='rating-value-3'>3</label>
      </li>
      <li>
        <input
          type='radio'
          id='rating-value-4'
          name='rating'
          value='4'
          onChange={handleChange}
          checked={selectedValue === 4}
        />
        <label htmlFor='rating-value-4'>4</label>
      </li>
      <li>
        <input
          type='radio'
          id='rating-value-5'
          name='rating'
          value='5'
          onChange={handleChange}
          checked={selectedValue === 5}
        />
        <label htmlFor='rating-value-5'>5</label>
      </li>

      <li>
        <input
          type='radio'
          id='rating-value-6'
          name='rating'
          value='6'
          onChange={handleChange}
          checked={selectedValue === 6}
        />
        <label htmlFor='rating-value-6'>6</label>
      </li>
      <li>
        <input
          type='radio'
          id='rating-value-7'
          name='rating'
          value='7'
          onChange={handleChange}
          checked={selectedValue === 7}
        />
        <label htmlFor='rating-value-7'>7</label>
      </li>
      <li>
        <input
          type='radio'
          id='rating-value-8'
          name='rating'
          value='8'
          onChange={handleChange}
          checked={selectedValue === 8}
        />
        <label htmlFor='rating-value-8'>8</label>
      </li>
      <li>
        <input
          type='radio'
          id='rating-value-9'
          name='rating'
          value='9'
          onChange={handleChange}
          checked={selectedValue === 9}
        />
        <label htmlFor='rating-value-9'>9</label>
      </li>
      <li>
        <input
          type='radio'
          id='rating-value-10'
          name='rating'
          value='10'
          onChange={handleChange}
          checked={selectedValue === 10}
        />
        <label htmlFor='rating-value-10'>10</label>
      </li>
    </ul>
  )
}

export default RatingValue
