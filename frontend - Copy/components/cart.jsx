import "../src/App.css"
import {  } from "react";

export function Cart({count}){
    
    return(
        <button style={{
          height:"2rem"
        }} class="addtocart">
  <div class="pretext">
    <i class="fas fa-cart-plus">{count}</i> 
  </div>
  
  
  
</button>
    )


}