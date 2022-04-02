import React, {useState} from 'react'

function Header() {
    const [text, setText] = useState('');

    const handleChange = (e) => setText(e.target.value);

  return (
      <header className='header'>
          <input value={text} onChange={handleChange}>
          </input>
    </header>
  )
}

export default Header