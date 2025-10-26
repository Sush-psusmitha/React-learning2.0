
import Content from "./components/Content";
import CounterAPp from "./components/CounterAPp";
import Footer from "./components/Footer";
import Head from "./components/Head"
import Header from "./components/Header";
import LearnComponent from "./components/LearnComponent"
import StateComponent from "./components/StateComponent";
import Student from "./components/student"

let user = "Sushmitha"
function App() {
  return (
    <div className="app">
      {/* <Student name="Sushmitha" age={23} isMarried={true} /> */}
      {/* <Student name="sam" isMarried={true} /> */}
       {/* age default → 0 */}
      {/* <Student />  */}
      {/* isMarried default → false */}
      {/* <Student />  */}
      {/* all default values */}
      <StateComponent />
      <Header user={user} />
      
      <Content />
      <Footer user="Santhosh"/>
      <CounterAPp />
    </div>
  );
}

export default App;
// npm run dev - to run server
// props - parent component lo unna data ni child ki pass cheyadame props by destructing