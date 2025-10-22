import Styles from './product-item.module.css'
function ButtonComponent(){
    return<>
        <button className={Styles.buttonStyle}>Click Me!!!</button>
    </>
}

function ProductItem ({sigelProduct,keyName}){
    return <div key={keyName} style={{padding:"20px", border: "2px solid yellow",marginBottom:'14px'}}>
      <p style={{color: "orange", fontSize: "20px"}}>{sigelProduct}</p>
      <ButtonComponent />
    </div>
}
export default ProductItem