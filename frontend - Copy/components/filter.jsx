import {useCallback, useState } from "react"

export function Filter({products,setProducts}){
    const [search,setSearch]=useState("");

    function filterProducts(){
        fetch(`https://dummyjson.com/products`)
    .then(async (res) =>{
        const json =await res.json();
        let productsarr=[];
        productsarr=json.products.filter(product=>product.price==search);

        
        setProducts((products)=>products=productsarr);
        setSearch("");
        
        

    })
    
        

    }
    return(
        <div>
            <input type="text" placeholder="Enter Price" onChange={(e)=>{
                setSearch(e.target.value);

            }} />
            <button type="button" onClick={filterProducts}>Filter</button>

        </div>
            
    )





}