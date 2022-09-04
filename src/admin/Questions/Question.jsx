import React from 'react'

const Question = ({question,questiondetails}) => {
  return (
    <>
      
      <tr onClick={() => { questiondetails(question.questions_id) }}>
        <th className="text-center" scope="row">{question.questions_id}</th>
        <td className="text-center">{question.questions_val}</td>
        <td className="text-center">{question.is_active ? <span className="badge bg-success rounded-pill">Active</span> : <span className="badge bg-danger rounded-pill">Inactive</span>}</td>
      </tr>
    </>
  )
}

export default Question