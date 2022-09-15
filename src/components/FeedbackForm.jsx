
import { useState, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({handleAdd, feedbackEdit, updatefeedback}) {
    const [text, setText] = useState('') 
    const [rating, setRating] = useState(10) 
    const [btnDisabled, setbtnDisabled] = useState(true) 
    const [message, setMessage] = useState('') 

    useEffect(()=> {
        if(feedbackEdit.edit === true){
            setbtnDisabled(false)
            setText(feedbackEdit.text)
            setRating(feedbackEdit.item.rating) 
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
    if(text === '') {
        setbtnDisabled(true)
        setMessage(null)
    } else if(text !== '' && text.trim().length <= 10) {
        setMessage('ext must be at least 10 characters')
        setbtnDisabled(true)
    } else {
        setMessage(null)
        setbtnDisabled(false)
    }

        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                text,   /* just short-hand for text: text, */
                rating
            }
            handleAdd(newFeedback)

            setText('')
        }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>
                How would you rate your service with us?
            </h2>
            <RatingSelect select={(rating) => setRating(rating)} feedbackEdit={feedbackEdit}/>
            <div className="input-group">
                <input 
                onChange={handleTextChange} 
                type="text" 
                placeholder="Write a review"
                value={text}
                />
                <Button type="submit" isDisabled={btnDisabled} >Send</Button>
                </div>
                {message && <div className="messgae">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm