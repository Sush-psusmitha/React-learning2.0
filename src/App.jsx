import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassBasedComponent from './components/class-based-component'
import FunctionalComponent from './components/functional-component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h1>React JS Concepts</h1>
      <FunctionalComponent />
      {/* <ClassBasedComponent /> */}
     </div> 
    </>
  )
}

export default App
// npm run dev  - to run server