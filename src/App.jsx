import Head from "./components/Head"
import LearnComponent from "./components/LearnComponent"
import Student from "./components/student"

function App() {
  
  return (
    <>  
      <h1>React JS Concepts</h1> 
      {/* <LearnComponent/> */}
     {/* <Head/> */}
     <Student name="Sushmitha" age={23} isMarried={true}/>
     <Student name="sam" age={93} isMarried={true}/>
    </>
  )
}

export default App
// npm run dev  - to run server
// props - parent component lo unna data ni child ki pass cheyadame props by destructing