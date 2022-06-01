import "./review.css";
import { useParams, Link } from 'react-router-dom'
import React from 'react';
import { useState, useEffect } from 'react'
import { projectFirestore } from '../../firebase/config'

export default function Review() {
    const { id } = useParams()
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const [review, setReview] = useState(null)
    
    useEffect(() => {
      setIsPending(true)
  
      projectFirestore.collection('reviews').doc(id).get().then(doc => {
        if (doc.exists) {
          setIsPending(false)
          setReview(doc.data())
        } else {
          setIsPending(false)
          setError(`Could not find that review`)
        }
      })
  
    }, [id])

  return (
    <div>

      {/* <div className="genre-list">
    <Link className="genre-button" to={`/all_time_favorites`}>All Time Favorites</Link>
    <Link className="genre-button" to={`/historical_fiction`}>Historical Fiction</Link>
    <Link className="genre-button" to={`/mythology`}>Mythology</Link>
    <Link className="genre-button" to={`/coming_of_age`}>Coming of Age</Link>
    <Link className="genre-button" to={`/science_fiction`}>Science Fiction</Link>
    <Link className="genre-button" to={`/family_drama`}>Family Drama</Link>
    <Link className="genre-button" to={`/fantasy`}>Fantasy</Link>
    <Link className="genre-button" to={`/romance`}>Romance</Link>

  </div> */}



      <div className="review">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {review && 
        <>
        <h2 className="page-title">{review.title}</h2>
        <p className="author">By {review.author}</p>

          <p className="tags">Tags: {review.tags}</p>

        {/* <div className="image">
        <img src={review.coverurl}></img>
        </div> */}


        <div classsName="review-text">
        <p className="body">{review.p1}</p>
        <p className="body">{review.p2}</p>
        <p className="body">{review.p3}</p>
        <p className="body">{review.p4}</p>
        <p className="body">{review.p5}</p>
        <p className="body">{review.p6}</p>
        
        </div>

      </>
      }
      </div>
    </div>
  )
}
