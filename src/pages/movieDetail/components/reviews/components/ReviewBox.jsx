import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
const ReviewBox = ({data}) => {

    const [showMore, setShowMore] = useState(false)
    const maxLength = 200;

    const ClickMore = () => {
        setShowMore(!showMore)
    }

    const MoreReview = data.content.length > maxLength ? data.content.substring(0, maxLength) + '...' : data.content

  return (
    <div className='w-100 border rounded p-3 my-2'>
        <h3>{data.author}</h3>
        <p>{showMore? data.content:MoreReview}</p>
        {data.content.length > maxLength && (
                        <Button variant='outline-light' className='mb-2' onClick={ClickMore}>{showMore ? '접기' : '더보기'}</Button>
            )}
</div>
  )
}

export default ReviewBox