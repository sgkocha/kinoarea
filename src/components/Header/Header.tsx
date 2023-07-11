import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <header className="header d-f jc-sb align-center">
    <div>
        <div><Link to="/"><img src="images/logo.png" alt="logo" /></Link></div>
        <div className="header-social d-f align-center">
            <div><img src="images/social1.png" alt="social1" /></div>
            <div><img src="images/social2.png" alt="social2" /></div>
            <div><img src="images/social3.png" alt="social3" /></div>
            <div><img src="images/social4.png" alt="social4" /></div>
        </div>        
    </div>
    <nav>
        <ul className="header-nav-list d-f">
            <li><a href="">Aфіша</a></li>
            <li><Link to="media">Медіа</Link></li>
            <li><a href="">Фільми</a></li>
            <li><a href="">Актори</a></li>
            <li><Link to="news">Новини</Link></li>
            <li><a href="">Підбірки</a></li>
            <li><a href="">Категорії</a></li>
        </ul>
    </nav>
    <div className='header-actions d-f'>
       <button><img src="images/search.png" alt="search" /></button>
       <button>Увійти</button>
    </div>
        
   </header>
  )
}

export default Header