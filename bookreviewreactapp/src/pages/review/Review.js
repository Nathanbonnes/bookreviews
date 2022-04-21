import "./review.css";
import { useParams } from 'react-router-dom'
import { UseFetch } from "../../hooks/UseFetch";
import React from 'react';

export default function Review() {
    const { id } = useParams()
    console.log(id)
    const url = 'http://localhost:3000/reviews/' + id
    const {isPending, error, data: review} = UseFetch(url)
    
  return (
    <div className="review">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {review && 
        <>
        <h2 className="page-title">{review.title}</h2>
        <p>By {review.author}</p>
        <p className="body">{review.body}</p>
      </>
      }
    </div>
  )
}
