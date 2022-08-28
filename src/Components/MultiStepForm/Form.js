import React ,{useState}from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getProducts } from '../../actions/categoryAction'
import Question from './Question'

function Form() {
  const navigation=useNavigate()
  const dispatch=useDispatch()
  let { questions,title ,questionsWithAnsers} = useSelector(state => state.categoryData)
 
 const [CurrentIndex, setCurrentIndex] = useState(0);
 const HandleNext= async()=>{
  try {
    if(CurrentIndex+1 ==questions.length){
      let newAnsers =[]
      for (let index = 0; index < questionsWithAnsers.length; index++) {
        const element = questionsWithAnsers[index];
        newAnsers.push(element.answer_id)
      }
      await dispatch(getProducts({answers:newAnsers}))
      navigation('/products')
    }else{
      setCurrentIndex(CurrentIndex+1)
    }
  } catch (error) {
    console.error(error)
    alert(error.message)
  }

  
 }
 const handlePrev=()=>{
  setCurrentIndex(CurrentIndex-1)
 }
  return (
    <>
      <div className="multistep-form">
        <div className="single-form">
          <h1> {title}</h1>
          {questions.length ?
            <Question question={questions[CurrentIndex]}/>
            :"No question Found"
          }
         <div className="next-pre-button-for-form">
          {CurrentIndex !=0 && <button type="button" onClick={handlePrev}>Previous</button>}
         {
           questionsWithAnsers.find(e=>e.questions_id==questions[CurrentIndex].questions_id) &&
           <button type="button" onClick={HandleNext} >Next</button>
         }
          
        </div>
        
        </div>
      </div>

    </>
  )
}

export default Form