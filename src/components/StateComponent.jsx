import { useState } from 'react'

function StateComponent() {
  // let color = "Blue"
const [color,setColor] = useState("Blue"); 

// eg:2 
const [count,setCount] = useState(0);

const handleIncrement = () => {
  setCount(count + 1)
}
const handleDecrement = () => {
  setCount(count - 1) 
}
// eg:3
const [name,setName] = useState("")

// eg:4
const [user,setUser] = useState("sushmitha");
  return (
    <div>
      <p> My Favioute color is {color}</p> 
       <button onClick={()=>{setColor("Orange")}}>Change Color</button> <br />
       <p>Count : {count}</p>
       <button onClick={handleIncrement}>Increment</button> 
       <button onClick={handleDecrement}>Decrement</button> <br /> <br />

       <input type="text" placeholder='Enter your Name' onChange={(e) =>setName(e.target.value) } />

       <h2>{name}</h2>

<p>My Name is {user}</p>
<button onClick={()=>{setUser("Santhosh")}}>Change Name</button>
    </div>
  )
}
export default StateComponent
// useState hook - whenever re-renders it will come to initial state value. 
// setState - we can update the current value using this
