import React, { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  console.log(todo)
  return (
    <div className='app'>
      <span className='heading'>Todo</span>
      <InputField todo={ todo } setTodo={ setTodo } />
    </div>
  )
}

export default App
