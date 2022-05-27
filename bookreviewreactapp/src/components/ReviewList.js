import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

// styles
import './reviewlist.css'

export default function ReviewList({ reviews, tag }) {
  const [isTag, setisTag] = useState(false)


  useEffect(() => {
    if (tag) {
      console.log("set is tag")
      setisTag(true)
    }
  })

  return (
    <div>

    <div className="genre-list">
    <Link className="genre-button" to={`/all_time_favorites`}>All Time Favorites</Link>
    <Link className="genre-button" to={`/historical_fiction`}>Historical Fiction</Link>
    <Link className="genre-button" to={`/mythology`}>Mythology</Link>
    <Link className="genre-button" to={`/coming_of_age`}>Coming of Age</Link>
    <Link className="genre-button" to={`/science_fiction`}>Science Fiction</Link>
    <Link className="genre-button" to={`/family_drama`}>Family Drama</Link>
    <Link className="genre-button" to={`/fantasy`}>Fantasy</Link>
    <Link className="genre-button" to={`/romance`}>Romance</Link>

  </div>
    <div className="review-list">
      {!isTag && reviews.map(review => (
        <div key={review.id} className="card">
          <h3>{review.title}</h3>
          <p>by {review.author}</p>
          <img src={review.coverurl}></img>
          <Link to={`/reviews/${review.id}`}>Read More</Link>
        </div> 
      ))}

    {isTag && 
    reviews.map((review) => {

      return (review.tag1 === tag || review.tag2 === tag || review.tag3 === tag || review.tag4 === tag || review.tag5 == tag) ? (
          <div key={review.id} className="card">
          <h3>{review.title}</h3>
          <p>by {review.author}</p>
          <img src={review.coverurl}></img>
          <Link to={`/reviews/${review.id}`}>Read More</Link>
        </div> 
      ) : (
        null
      )
    })}

    </div>
    </div>
  )
}