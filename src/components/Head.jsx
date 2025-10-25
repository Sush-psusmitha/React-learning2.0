import '../css/app.css'
function Head() {
  let customCss = "error"; 

  const isLoggedIn = false;
  const greet = isLoggedIn ? <p>Welcom to the board</p> : <p>Try Again</p>

   const items = ['item 1','item 2','item 3','item 4',]
  return (
    <>
      <div>
        <h1 className="text">this is header</h1>
        <p className="slogan">Learn more be smart</p>

        {/* js expression in jsx */}
        <p className={customCss} style={{color: "white", fontSize: "20px"}}> 20 + 20 = {20 + 20}</p>


        {/* jsx with conditional rendering */}
        {
          isLoggedIn ? <p>Welcom to the board</p> : <p>Try Again</p>
        }
        {greet} using variable

        {/* jsx with list */}
        <ul>
          {items.map((item,index)=>(<li key={index}>{item}</li>)            
            )
          }
        </ul>
      </div>
    </>
  )
}

export default Head