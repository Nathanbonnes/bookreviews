import './home.css'
import React, { useEffect, useState } from 'react'
import ReviewList from '../../components/ReviewList'
import { projectFirestore } from '../../firebase/config'

export default function Home() {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)

    projectFirestore.collection('reviews').get().then((snapshot) => {
      if (snapshot.empty) {
        setError('No reviews')
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({id: doc.id, ...doc.data() })
        })
        setData(results)
        setIsPending(false)
      }
    }).catch(err => {
      setError(err.message)
      setIsPending(false)
    })

  }, [])

  return (
    <div className="home">
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">loading...</p>}
        {data && <ReviewList reviews = {data} />}
    </div>
  )
}
