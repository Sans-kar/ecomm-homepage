import { memo ,useState,useCallback} from "react";
import { Cart } from "./cart";
import { Cards } from "./cards";

export const Products=memo(({products,Incriment})=>{
    
      
    
    return(
        <div className="cards">
            
            {products.map((product)=>{
                return(
                    
                        
                    <Cards product={product} key={product?.id} Incriment={Incriment}  ></Cards>
                    

                )


            })}
        
            
            
        </div>
    )


})



