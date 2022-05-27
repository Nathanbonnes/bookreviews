import "./review.css";
import { useParams } from 'react-router-dom'
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
    <div className="review">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {review && 
        <>
        <h2 className="page-title">{review.title}</h2>
        <p className="author">By {review.author}</p>

        <div className="tags">
          <p>Tags: {review.tags}</p>
        </div>

        <div className="image">
        <img src={review.coverurl}></img>
        </div>


        <div classsName="review-text">
        <p className="body">{review.p1}</p>
        <br></br>
        <p className="body">{review.p2}</p>
        <br></br>
        <p className="body">{review.p3}</p>
        <br></br>
        <p className="body">{review.p4}</p>
        <br></br>
        <p className="body">{review.p5}</p>
        <br></br>
        <p className="body">{review.p6}</p>
        
        <br></br>
        </div>

      </>
      }
    </div>
  )
}
