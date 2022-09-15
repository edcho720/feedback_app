// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
// import { FeedbackProvider } from './context/FeedbackContext'
// import AboutPage from './pages/AboutPage'
// import AboutIconLink from './components/AboutIconLink'



function App() {
const [feedback, setFeedback] = useState(FeedbackData);

const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
})

const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
}

const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
        setFeedback(feedback.filter((item) => item.id !== id))
    }
}


function editFeedback(item) {
    setFeedbackEdit({
        item: item,
        edit: true
    })
}

function updateFeedback(id) {
    console.log(id)
}

    return (
        // <FeedbackProvider>
            <>
                <Header />
                <div className='container'>
                                
                    <FeedbackForm handleAdd={addFeedback} feedbackEdit={feedbackEdit}
                        updateFeedback={updateFeedback}
                    />
                    <FeedbackStats feedback={feedback} />
                    <FeedbackList feedback={feedback} 
                    handleDelete={(deleteFeedback)}
                    handleEdit={editFeedback}
                    />
                    
                </div>
            </>
        // </FeedbackProvider>
    )
}

// for some reason adding router to App component won't let it render
// leaving it out for now, code is below. Maybe a version issue?

{/* <Router>
            
<Header />
<div className='container'>
    <Routes>
        <Route exact path='/' element={
            <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={(deleteFeedback)} />
            </>
        }
        ></Route>     
    

        <Route path='/about' element={<AboutPage />} />
    </Routes>
    <AboutIconLink />
</div>
</Router> */}


export default App

// function App() {

//     const title = 'Blog Post'
//     const body = 'This is my blog post'

//     const comments = [
//         {id: 1, text: 'Comment one'},
//         {id: 2, text: 'Comment two'},
//         {id: 3, text: 'Comment three'},
//     ]

//     const loading = false
//     const showComments = true

//     const comments = just some output

//     if(loading) return <h1>Loading...</h1>


//     return (
//         <div className='container'>
//             <h1>{title.toUpperCase()}</h1>
//             <p>{body}</p>

//             {showComments ? 'yes' : 'no'} // ternary expression // {showComments && 'yes'} 
                // {showComments && comments}

//             {5 + 5}
//             {Math.random() *(5+5)}

//             <div className='comments'>
//                 <h3>Comments ({comments.length})</h3>
//                 <ul>
//                     {comments.map((comment, index) => (
//                         <li key={index}>{comment.text}</li>
//                     ))}
//                 </ul>
//             </div>



//         </div>
//     )
// }