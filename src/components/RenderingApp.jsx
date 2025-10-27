import { useState } from "react"
import styled from "styled-components";

const Button = styled.button`
  width: 150px;
  height: 50px; 
  background-color: blue; 
  color:white;
`
let msg;
// let remainigClick = 10 - count

function RenderingApp() {
    const [count,SetCount] = useState(0); 
    const [data,setData] = useState("Success")
 
    const handleIncrease = () => {
       SetCount((prevCount)=> prevCount + 1)
    }

    if(count < 10){
       msg = (
       <div>
        <h3>You Clicked {count} times!!</h3>
       <p>stil {10 - count} Clicks to reach </p>
       </div>) 
    }
    else if(count === 10){
     msg = (
        <div>
           <h3>You Clicked {count} times!!</h3>
           <p>You Unlocked 10% discount</p>
        </div>
     )
    }
    else if(count < 20){
       msg = (
        <div>
           <h3>You Clicked {count} times!!</h3>
           <p>You're on the way to get more rewards! keep click for 20% discount</p>
        </div>
     )  
    }
    else{
     msg = (
        <div>
           <h3>You Clicked {count} times!!</h3>
           <p>You Reached 20 times Your are a Click Master</p>
        </div>
     )
    }

    const displayOut = () =>{
       switch (data) {
        case "Loading": return <LoadingComp />;
        break;
        case "Success": return <SuccessComp />;
        break; 
        case "Error" : return <ErrorComp />;
        break;
       }
    }
  return (
    <div>
       <h1>Click to Unlock Rewards🎉 - {count}</h1><Button onClick={handleIncrease}>Click Me</Button>
       {msg}

    {displayOut()}
      
       {/* {
        count >= 10 ? <p>You unlocked 10% discount🥳</p> : <p>Click 10 times to unlock Rewards</p>
       } */}
       {/* {
        count >=20  && <p>You are a click master</p>
       } */}
    </div>
  )
}

export default RenderingApp

// && - if condition true only statement will excute  
function LoadingComp (){
    return <>
    <h3>Loadingg!!</h3>
    </>
}
function SuccessComp(){
    return <>
    <h3>Success</h3>
    </>
}
function ErrorComp(){
    return <>
    <h3>Error</h3>
    </>
}
