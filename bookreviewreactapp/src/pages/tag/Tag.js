import './tag.css'
import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ReviewList from '../../components/ReviewList'
import { projectFirestore } from '../../firebase/config'

export default function Home() {
  const { tag } = useParams()
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
    <div className="tag">
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">loading...</p>}
        {data && <ReviewList reviews = {data} tag = { tag} />}
    </div>
  )
}
