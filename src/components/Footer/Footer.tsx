import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-social d-f align-center">
        <div><img src="images/social1.png" alt="social1" /></div>
        <div><img src="images/social2.png" alt="social2" /></div>
        <div><img src="images/social3.png" alt="social3" /></div>
        <div><img src="images/social4.png" alt="social4" /></div>
      </div>
      <nav>
        <ul className="footer-nav-list d-f">
          <li><a href="">Aфіша</a></li>
          <li><a href="">Медіа</a></li>
          <li><a href="">Фільми</a></li>
          <li><a href="">Актори</a></li>
          <li><a href="">Новини</a></li>
          <li><a href="">Підбірки</a></li>
          <li><a href="">Категорії</a></li>
        </ul>
      </nav>
      <div className="footer-rights">2020 &copy;Kinoarea. Всі права захищені</div>
      <a href="" className="footer-policy">Політика конфіденційності</a>
    </div>
  )
}

export default Footer