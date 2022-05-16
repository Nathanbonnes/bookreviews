import React, { useState, useEffect } from 'react'
import "./navbar.css"
import { Link } from'react-router-dom'
import random_num from '../microservice/pipeline.txt'

export default function Navbar() {

  const [num, setNum] = useState()
  const num_of_reviews = 3

  const load = async () => {
    try {
      const response = await fetch(random_num);
      const num = await response.text();
      setNum(num)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    load()
  }, [])

  return (
    <div className="navbar">
        <nav>
            <Link to="/" className="brand">
                <h1>Gretchen's Book Recs</h1>
            </Link>
            <Link to="/about">About</Link>
            <Link to={`/reviews/${num%num_of_reviews}`}>Random Rec</Link>
        </nav>

    </div>
  )
}
