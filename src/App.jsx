import React, { useState } from "react";
const App=()=>{
  //1.Create inputs and its variables
  //2. Binding the input with the variables
  //3. Saving the items  to Array
  //4. Display items from the array 
  const [productName, setproductName] = useState('')
  const [productPrice, setproductPrice] = useState(0)
  const [productQuantity, setproductQuantity] = useState(0)
  const [productImage, setproductImage] = useState('')
  const [allProducts, setallProducts] = useState([])

  const Addproduct=()=>{
    let product={
      productName,
      productPrice,
      productQuantity,
      productImage
    }
      setallProducts(product)
      console.log(product);
      setallProducts([...allProducts,product])  
      console.log(allProducts);
      
  }

  return(
    <>
    <marquee behavior="" direction=""> <mark> <h2>Akinola Store</h2></mark></marquee>
   
    <input type="text" placeholder="Name of the product" onChange={(e)=>setproductName(e.target.value)} />
    <input type="text" placeholder="Price of the product" onChange={(e)=>setproductPrice(e.target.value)} />
    <input type="text" placeholder="Quantity of the product" onChange={(e)=>setproductQuantity(e.target.value)}/>
    <input type="text" placeholder="Image of the product" onChange={(e)=>setproductImage(e.target.value)} />
    <button onClick={Addproduct}>Add product</button>
  
      {allProducts.map(
        (product,index)=>(
        <>
          <h2>{product.productName}  </h2>
          <img src={product.productImage} alt="product image" width={100} height={100}/> 
          <button>
          <h3>{product.productPrice}</h3>
          </button>
        

        </>
       
        )
      )}
  
    </>
  
  )
}
export default App