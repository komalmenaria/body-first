import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Question from './Question'
function Form() {
  let { questions,title } = useSelector(state => state.categoryData)
 
  return (
    <>
      <div className="multistep-form">
        <div className="single-form">
          <h1> {title}</h1>
          {questions.length ?
            <Question/>
            :"No question Found"
          }
         
        
        </div>
      </div>

    </>
  )
}

export default Form