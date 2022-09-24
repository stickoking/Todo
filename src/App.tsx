import React from 'react'
import './App.css'
import InputField from './components/InputField'
const App = (): React.ReactElement => {
  return (
    <div className='app'>
      <span className='heading'>Todo</span>
      <InputField/>
    </div>
  )
}

export default App
