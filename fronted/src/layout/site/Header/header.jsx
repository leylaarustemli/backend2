
import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
const Header = () => {
return (
    <div className='header'>
        <div className="container">
        <div className="left-header">
    <img src="	https://preview.colorlib.com/theme/aranoz/img/logo.png" alt="" />
</div>
<div className="center-header">
    <ul>
        <li><Link to="/">Home</Link></li>
        <li>Shop<i class="fa-solid fa-chevron-down"></i></li>
        <li>Pages<i class="fa-solid fa-chevron-down"></i></li>
        <li>Blog<i class="fa-solid fa-chevron-down"></i></li>
        <li>Contact</li>
    </ul>
</div>
<div className="right-header">
<i class="fa-solid fa-magnifying-glass"></i>
<i class="fa-regular fa-heart"></i>
 <Link to="/basket"> <i class="fa-solid fa-cart-plus"></i></Link> 
</div>
        </div>

    </div>
)
}

export default Header
                            