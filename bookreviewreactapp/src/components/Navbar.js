import "./navbar.css"
import { Link } from'react-router-dom'

export default function Navbar() {

  const num_of_reviews = 3

  return (
    <div >

      <div className="navbar">
        <nav>
            <Link to="/" className="brand">
                <h1>Gretchen's Book Recs</h1>
            </Link>
            <Link className="smaller_button" to="/about">About</Link>
            {/* <Link className="smaller_button" to={`/reviews/${num%num_of_reviews}`}>Random Rec</Link> */}
        </nav>
        </div>

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

    </div>
  )
}
