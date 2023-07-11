import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Media from '../../pages/Media'
import News from '../../pages/News'

const Main = ()=> {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home/>}
      />
      <Route
        path='media'
        element = {<Media/>}
      />
      <Route
        path='news'
        element = {<News/>}
      />
     
    </Routes>
  )
}

export default Main