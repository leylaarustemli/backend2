import React, { useContext } from 'react'
import "./Cardsection.css"
import axios from 'axios'
import MainContext from '../context/context'
const Cardsection = () => {
    const{data,addToBasket}=useContext(MainContext)
  return (
    <div className='card-sectn'>
        <div className="container">
            <div className="title-sect1">
            <h3>AWESOME</h3>
<p>SHOP</p>
            </div>
 
<div className="cards">
    {data.map((item,index)=>(<div className="card">
        <div className="card-body">
            <img src={item.image} alt="" />
        </div>
        <div className="card-footer">
            <h4> {item.title}</h4>
            <span>${item.price}</span>
            <div className="btn-like">
            <button onClick={()=>{
                addToBasket(item._id)
            }} id='add'>Add to basket</button>
            <i class="fa-regular fa-heart"></i>
            <button id='detail'>Details</button>
            </div>
           

        </div>
    </div>))}
</div>
        </div>

    </div>
  )
}

export default Cardsection