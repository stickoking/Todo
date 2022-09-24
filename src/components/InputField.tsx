import React from 'react'
import './styles.css'

const InputField = (): React.ReactElement => {
  return (
    <form className='input'>
        <input type='input' placeholder='Enter a task' className='input__box'/>
        <button className='input__submit'>Go</button>
    </form>
  )
}

export default InputField
