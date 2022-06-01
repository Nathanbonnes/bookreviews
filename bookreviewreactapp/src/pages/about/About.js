import "./about.css"
import { Link } from 'react-router-dom'

import React from 'react'

export default function about() {
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

      <div className="site">
      <h2>About the site</h2>
      <p>This site is a place to read book recommendations written by Gretchen Bonnes!
        She highly recommends all books on this site. Browse the home page
         to see all recommended books. Click "Read More" on each book to navigate to the full recommendation. The title on the top left of the screen, "Gretchen's Book Recs"
         will always act as a homepage 
        button. Click on it if you ever want to navigate back to the home page. 
        </p>
        
        <p>
         If you enjoy a particular genre of book, click on that genre button on the home page 
        and you will see all recommendations for books of that type. 
        </p>
        <p>
        The "Random Rec" button takes you to a random book recommendation. Click it if you're feeling adventurous.
        </p>
        <p> 
         If you see a book title that you recognize, you
        can start by reading that recommendation, or you can pick one you haven't heard of! You never know what recommendation might pique your interest. 
        Each recommendation should take about 2 minutes to read. Read one or read them all - either way - we hope this website helps you enjoy more great books!
        </p>
      </div>
      
      </div>

  )
}
