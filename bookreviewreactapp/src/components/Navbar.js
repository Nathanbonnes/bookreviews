import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar">
        <nav>
            <Link to="/" className="brand">
                <h1>Gretchen's Book Reviews</h1>
            </Link>
            <Link to="/about">About</Link>
            <Link to="/">Random Review</Link>
        </nav>

    </div>
  )
}
