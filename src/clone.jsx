
import React, { useState } from  'react'
//Creating of input and variables
//binding inputs with variables
//Saving to an Array
//Display from an array
const App=()=>{
  const [ProductName, setProductName] = useState('')
  const [ProductPrice, setProductPrice] = useState(0)
  const [ProductQuantity, setProductQuantity] = useState(0)
  const [ProductImage, setProductImage] = useState("")
  const [allProducts, setallProducts] = useState([])

const addProduct=()=>{
  let product={
    ProductName,
    ProductPrice,
    ProductImage,
    ProductQuantity,
     }
    setallProducts([product])
    console.log(product);
    setallProducts([...allProducts,product])

    //  let fruit = ['grape','banana','orange']
    //  console.log(fruit);
    //  let newFruits = [...fruit,'carrot']
    //  console.log(newFruits);   
}
return(
  <>
  <h2>Akinola store</h2>
<input type="text" placeholder='ProductName' onChange={(e)=>setProductName(e.target.value)}/>
<input type="text" placeholder='ProductPrice' onChange={(e)=>setProductPrice(e.target.value)} />
<input type="text" placeholder='ProductImage' onChange={(e)=>setProductImage(e.target.value)} />
<input type="text" placeholder='ProductQuantity'onChange={(e)=>setProductQuantity(e.target.value)}/>

<button onClick={addProduct}>AddProduct</button>
<hr />
<h2>All Products</h2>
<hr />
  {allProducts.map((product,index)=>(
    <div >
     <h3>{product.ProductName}</h3>
     <img src={product.ProductImage} alt="" width={100} height={100}/>
     <button>{product.ProductQuantity}</button>
     
    </div>
   
  ))}
  </>
)
}
export default App