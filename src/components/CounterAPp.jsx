import React, { useState } from 'react'

const CounterAPp = () => {
    // let count = 0
    const [count,SetCount] = useState(0);

    const SampleFun = () => {
        console.log(100)
        return 100
    }
    const [sample, SetSample] = useState(()=>{return SampleFun()})
    
    const handleIncrease = () => {

        // SetCount(count + 2);
        // SetCount(count + 2);
        // SetCount(count + 2);
        // SetCount((prevCount)=>{return prevCount+2 })
        // SetCount((prevCount)=>{return prevCount+2 })
        SetCount((prevCount)=>{return prevCount+2 })
       SetSample((prevCount)=>{return prevCount+2 })
    }
    const handleDecrease = () => {
        // SetCount(count - 2);
        // SetCount((prevCount)=>{return prevCount-2 })
        SetCount((prevCount)=>{return prevCount-2 })
        SetSample((prevCount)=>{return prevCount-2 })
    }
  return (
    <div>
      <h2 style={{marginTop: "50px"}}>Counter - {count} | sample - {sample}</h2>
      <button onClick={handleIncrease}>Increase</button>




      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

export default CounterAPp

//  SetCount(count + 2);  - idhul first value count which is curr value, so many times manu idhi rasthey everytime curr value ni + 2 add chethundhi. 

// if we depends on the previous value of state, we must use setCount((prevCount) => {return prevCount + 2}); now here everytime mananu increase chesthey this will get the previous value and add + 2, 

// we can also pass a function inside a state: 
// if we are passing an argument we must give the function inside a an annonymous function, and must use return KW, or esle if we use like sample()- everytime function will be called it will slowdown the application
