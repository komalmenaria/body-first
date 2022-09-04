import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Config from '../../Config'
import AddQuestion from './AddQuestion'
import QuestionDetails from './QuestionDetails'
import Question from './Question'
const Questions = () => {
  const [questionList, setquestionList] = useState([]);
  const [questionDetails, setquestionDetails] = useState(false);
  async function getAllQuestion (){
    return new Promise(async (resolve, reject) => {
      let data = await axios.get(`${Config.BASE_URL}questions`);
      console.log(data);
      setquestionList(data.data.data);
      resolve(data);
    });
  }

  function getquestiondetails(id) {
    let question = questionList.find((e) => e.questions_id === id);
    if (question) setquestionDetails(question);
  }
  async function changestatus(id, status) {
    try {
      await axios.patch(`${Config.BASE_URL}questions/${id}`, {
        is_active: status,
      });
      await getAllQuestion();
      getquestiondetails(id);

    } catch (error) {
      alert(error.message);
    }
  }
  useEffect(() => {
    getAllQuestion();
  }, []);
  return (
    <div>
      <div className="container py-2 ">
      <AddQuestion/>
      </div>
      <div className="container d-flex ">
        <div className="py-2">
          <table className="table table-bordered table-hover ">
            <thead>
              <tr>
                <th className="table-cell-padding-x px-5" scope="col">
                  ID
                </th>
                <th className="table-cell-padding-x px-5" scope="col">
                  question 
                </th>
                <th className="table-cell-padding-x px-5" scope="col">
                  Status
                </th>
              </tr>
            </thead>
            
            <tbody>
              {questionList.length
                ? questionList.map((question, index) => {
                    return (
                      <Question
                      question={question}
                        key={index}
                        questiondetails={getquestiondetails}
                      />
                    );
                  })
                : "Catgories Not found"}
            </tbody>
          </table>
        </div>
        <div>
          {questionDetails && (
            <QuestionDetails question={questionDetails} changestatus={changestatus} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Questions