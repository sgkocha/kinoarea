import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Registration from '../Registration/Registration';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 815,
  bgcolor: '#191E2E',
  border: '2px solid #000',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};


const Header = () => {

  const [open, setOpen] = React.useState(false)
  const [regView, setRegView] = React.useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => { 
    setRegView(false) 
    setOpen(false)
  }
  const handleRegView = () => {

    setRegView(true)
  }

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
        <button onClick={handleOpen}>Увійти</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <button className='modal-action' onClick={handleClose}><img src="images/close.png" alt="close" /></button>
            <h2 className="modal-title"> {regView ? "Зареєструватись" : "Увійти"}  </h2>
            {regView ? <Registration /> :
              <form action="" className="modal-fm">
                <input type="text" name='login' placeholder='Логін, пошта або телефон' />
                <input type="password" name="password" placeholder='Ваш пароль' />
                <button className="modal-fm-enter">Увійти</button>
                <button className="modal-fm-sign" onClick={(event) => { event.preventDefault(); handleRegView() }}>Зареєструватись</button>
                <button className="modal-fm-restore">Відновити пароль</button>
                <div className="modal-fm-socials"><img src="images/socials.png" alt="socials" /></div>
              </form>
            }
          </Box>
        </Modal>
      </div>

    </header>
  )
}

export default Header