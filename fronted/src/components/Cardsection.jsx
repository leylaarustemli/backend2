import React from 'react'
import "./Cardsection.css"
const Cardsection = () => {
  return (
    <div className='card-sectn'>
        <div className="container">
            <div className="title-sect1">
            <h3>AWESOME</h3>
<p>SHOP</p>
            </div>
 
<div className="cards">
    <div className="card">
        <div className="card-body">
            <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_1.png" alt="" />
        </div>
        <div className="card-footer">
            <h4> Quartz Belt Watch</h4>
            <span>$150.00</span>
            <div className="btn-like">
            <button id='add'>Add to basket</button>
            <i class="fa-regular fa-heart"></i>
            <button id='detail'>Details</button>
            </div>
           

        </div>
    </div>
</div>
        </div>

    </div>
  )
}

export default Cardsection