import ProductItem from "./components/product-item"
import './style.css'



// instead of props word we can directly write keys, in the form of object {} 
function ProductList({name,age,listOfproduct}){

  const flags = true;
    // console.log(props); 
    // const {name,age} = props

    // rendering 2 way
    function renderBlock(getFlag){
       return getFlag ? <h4>2. returning 'yes its true' using function </h4> : <h4>2. returning 'yes its false' using function</h4>
    }

    const renderBlok3 = flags ? <h4> 3 way of ternary rendering, using variable if it true</h4> : <h4>3 way of ternary rendering, using variable if it true</h4>

    // 4th way

  let renderBlock4 = null; 
    if(flags){
      renderBlock4 = <h4>4the ways using if else - true</h4>
    }else{
      renderBlock4 = <h4>4th way using if else - false</h4>
    }

    return<>
      <h3 className="title">Ecommerce Project</h3>

      <h4>My name is {name}, and age is {age}</h4>
      {/* <ProductItem/> */}
   <div>
    {listOfproduct.map((item,index)=> 
    <ProductItem sigelProduct = {item} keyName={index} />
    )}
   </div>


   {/* conditional statemnt using Ternary operator */}
   {/* 1.simple way */}
   {
    flags ? (<h2> 1.yes its true</h2>) : (<h2>1. No its false</h2>)
   }
   {/* usually wee should do using a function like below */}
   {renderBlock(flags)}
   {/* using varibale */}
   {renderBlok3}
   {/* using if else */}
   {renderBlock4}

   
    </>
}
export default ProductList