import React from 'react'
import './MovieCart.css'

type MovieCartProps = {
    image: string
    rating: string
    title: string
    genre: string
}

const MovieCart = ({image, rating, title, genre}:MovieCartProps) => {
  return (
    <div className='movie-cart'>
        <div style={{background: `url("${image}") no-repeat`, height: "462.91px", paddingTop: "8px"}}>
            <div className="movie-cart-rating">{rating}</div>            
        </div>
        <div className="movie-cart-title">{title}</div>
        <div className="movie-cart-genre">{genre}</div>
    </div>
  )
}

export default MovieCart