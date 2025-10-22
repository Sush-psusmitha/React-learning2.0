function ButtonComponent(){
    return<>
        <button>Click Me!!!</button>
    </>
}

function ProductItem ({sigelProduct,keyName}){
    return <div key={keyName}>
      <p>{sigelProduct}</p>
      <ButtonComponent />
    </div>
}
export default ProductItem