
import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { setAnswers } from '../../actions/categoryAction'

function Question({ question }) {
    const dispatch=useDispatch()
    let {questionsWithAnsers}=useSelector(state=> state.categoryData)
    const handleAnsersChanges= async(questions_id,answer_id)=>{
       try {
        let newQuestionsWithAnsers=questionsWithAnsers
        let findEle=newQuestionsWithAnsers.find(e=>e.questions_id==questions_id)
        if(findEle){
            for (let index = 0; index < newQuestionsWithAnsers.length; index++) {
                let  element = newQuestionsWithAnsers[index];
                    if(element.questions_id==questions_id ){
                        newQuestionsWithAnsers[index].answer_id=answer_id
                        
                    }
                 
            } 
        }
        else{
            let obj={
                questions_id,
                answer_id
            }
            newQuestionsWithAnsers=[...newQuestionsWithAnsers,obj]
        }
   
        console.log(newQuestionsWithAnsers)
        await dispatch(setAnswers(newQuestionsWithAnsers))
       } catch (error) {
        console.log(error)
        alert(error.message)
       }
            
            
       
    }
       
    
    return (
        <>
            <form action="#" className="multi-q-s-form">
                <center>{question.questions_val}</center>

                <div className='option-fields'>
                    {question?.answers?.length ? question?.answers?.map((answer) => {
                        let valueIsChecked=questionsWithAnsers.find(e=>e.answer_id==answer.answer_id )
                        return (
                            <div className='single-ans-filed'>
                                <input type="radio"  value={answer.answer_id} checked={valueIsChecked?true:false}  onChange={()=>{
                                    handleAnsersChanges(answer.questions_id,answer.answer_id)
                                }}/>
                                <label>{answer.answer_val}</label>
                            </div>
                        )
                    })



                        : ""}


                </div>
            </form>
        </>
    )

}

export default Question;
