import './home.css'
import { UseFetch } from '../../hooks/UseFetch'
import React from 'react'
import ReviewList from '../../components/ReviewList'

export default function home() {
    const { data, isPending, error} = UseFetch("http://localhost:3000/reviews")

  return (
    <div className="home">
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">loading...</p>}
        {data && <ReviewList reviews = {data} />}
    </div>
  )
}
