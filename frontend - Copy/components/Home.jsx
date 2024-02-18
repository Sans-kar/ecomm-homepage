import { useCallback, useEffect, useState } from 'react'

import '../src/App.css'
import { Search } from '../components/search'
import { Products } from '../components/products'
import { Filter } from "../components/filter";
import { Cart } from '../components/cart';


export function Home(){

    const [products, setProducts] = useState([])
  const [count,setCount]=useState(0);

    const Incriment=useCallback(()=>{
        setCount(count+1);
      },[count]);
  

  useEffect(()=>{
    fetch(`https://dummyjson.com/products`)
    .then(async (res) =>{
        const json =await res.json();
        
        setProducts(products=>products=json.products);
      
        
        

    })
  },[])




    return(
       <>
       <div style={{
    display:'flex',
    justifyContent:'space-evenly'
  }}> 
  <Search products={products} setProducts={setProducts}></Search>
  <Filter products={products} setProducts={setProducts}></Filter>
  <Cart count={count}></Cart>
  
  </div>
  <Products products={products} setProducts={setProducts} Incriment={Incriment}/>


       </> 
    )
}


