import { useCallback, useState } from "react"

export function Search({products,setProducts}){
    const [search,setSearch]=useState("");

    function showProducts(){
        fetch(`https://dummyjson.com/products/search?q=${search}`)
    .then(async (res) =>{
        const json =await res.json();
        
        setProducts(products=json.products);
        setSearch("");
        
        

    })
    
        

    }
    return(
        <div>
            <input type="text" placeholder="Search Products" onChange={(e)=>{
                setSearch(e.target.value);

            }} />
            <button type="button" onClick={showProducts}>Search</button>

        </div>
            
    )





}