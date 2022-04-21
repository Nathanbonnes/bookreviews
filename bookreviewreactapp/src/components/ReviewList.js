import { Link } from 'react-router-dom'

// styles
import './reviewlist.css'

export default function ReviewList({ reviews }) {
  return (
    <div className="review-list">
      {reviews.map(review => (
        <div key={review.id} className="card">
          <h3>{review.title}</h3>
          <p>by {review.author}</p>
          <img src={review.coverurl}></img>
          <Link to={`/reviews/${review.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  )
}