import styled from "styled-components"

function Content() {
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
  return (
    <main>
         <h1 style={{background: "Orange", color:"white"}}>Main Content</h1>
         <p style={ headingStyle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, natus.</p>
         <Button>Click</Button> <br/>
         <NewBtn>Duplicate</NewBtn>
    </main>
  )
}

export default Content

