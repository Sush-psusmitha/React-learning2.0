import styled from "styled-components"

let headingStyle = {
    backgroundColor : "red", 
    color : "black", 
    boxShadow: "10px 6px 2px black"
}
let Button = styled.button 
`background-color : blue;
 color:white; 
 width:100px; 
 height:50px;
`
let NewBtn = styled(Button)`
  box-shadow: 10px 10px 10px black;
  background-color : yellow;
`
function Content() {

  function print(e){
    console.log(e.target.innerText)
    console.log("hello");
  }
  function print1(user,e){
    console.log(user,e.target); 
  }
  return (
    <main>
         <h1 style={{background: "Orange", color:"white"}}>Main Content</h1>
         <p style={ headingStyle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, natus.</p>
         <Button onClick={print}>Click</Button> <br/>
         <NewBtn onClick={(e) => {print1("Sushma",e)}}>Duplicate</NewBtn>
    </main>
  )
}

export default Content
// onclik() lanti events lo functions ki arguments pass chesetapudu anonaymous function(without name ot arrow fun) lopala function rasi then arguments pass cheyali 

