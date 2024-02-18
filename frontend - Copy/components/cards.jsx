import "../src/App.css";
import {memo} from "react";
const Cards=memo(({product,Incriment}) =>{
    
  return(
      <div  className="card">
          <button href="" style={{
        border:"none"
      }} className="card">
    <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
    <div className="card__overlay">
      <div className="card__header">
        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
        <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
        <div className="card__header-text">
          <h3 className="card__title">{product?.title}</h3>            
            <span className="card__status">Rs. {product?.price}</span>
            <button href="" className="btn" onClick={Incriment}>Add</button>
        </div>
      </div>
      <p class="card__description">{product?.description}</p>
    </div>
  </button>

      </div>

  )
  
})

export {Cards};