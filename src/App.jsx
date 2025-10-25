import Head from "./components/Head"
import LearnComponent from "./components/LearnComponent"
import StateComponent from "./components/StateComponent";
import Student from "./components/student"

function App() {
  return (
    <>
      <h1>React JS Concepts</h1>
      <Student name="Sushmitha" age={23} isMarried={true} />
      <Student name="sam" isMarried={true} /> {/* age default → 0 */}
      <Student /> {/* isMarried default → false */}
      <Student /> {/* all default values */}

      <StateComponent />
    </>
  );
}

export default App;
// npm run dev  - to run server
// props - parent component lo unna data ni child ki pass cheyadame props by destructing