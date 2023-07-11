import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section from './components/Section'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <  >
      <div className='flex m-0 p-0 '>
        <Section />
        <Content/>
      </div>

    </>
  )
}

export default App
