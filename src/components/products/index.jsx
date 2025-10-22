import ProductItem from "./components/product-item"




// instead of props word we can directly write keys, in the form of object {} 
function ProductList({name,age,listOfproduct}){
    // console.log(props); 
    // const {name,age} = props
    return<>
      <h3>Ecommerce Project</h3>
      <h4>My name is {name}, and age is {age}</h4>
      {/* <ProductItem/> */}
   <div>
    {listOfproduct.map((item,index)=> 
    <ProductItem sigelProduct = {item} keyName={index} />
    )}
   </div>
    </>
}
export default ProductList