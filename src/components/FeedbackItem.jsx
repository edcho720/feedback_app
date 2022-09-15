// import {useState} from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'

function FeedbackItem({item, handleDelete, handleEdit}) {
    // const [rating, setRating] = useState(7)
    // const [text, setText] = useState('This is an example of a feedback Item')


  return (
    <Card reverse={true}>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => handleDelete(item.id)} className="close">
          <FaTimes color='purple' />
        </button>  
        <button onClick={() => handleEdit(item.id)} className="edit">
          <FaEdit color='purple' />
        </button> 
        <div className="text-display">{item.text}</div>
    </Card>
  )
}


FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem