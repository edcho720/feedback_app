import React from 'react'
import {createContext, useState} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from context',
            rating: 10
        }
    ])

    return (
        <FeedbackContext.Provider value={{
            feedback: feedback,
        }}>
            {children}
        </FeedbackContext.Provider>
    )

}


function FeedbackContext() {
  return (
    
  )
}

export default FeedbackContext