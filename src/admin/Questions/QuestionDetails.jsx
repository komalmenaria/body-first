import React from 'react'

const QuestionDetails = ({question,changestatus}) => {
  return (
    <>
        <div className="card mx-5 my-2 px-3 ">
        <h5 className="card-title ">
              Question : {question.questions_val}
            </h5>
             <br />
          {question?.answers?.length ? (
            <div> <h6><b>Options</b></h6>
              <div className=" d-flex flex-wrap">
               
                {question?.answers.map((option) => {
                  return (
                    <>
                      <span class="badge text-bg-primary m-2">
                        {option.answer_val}
                      </span>

                      <br />
                    </>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="card-body">
        

            <div className="d-grid gap-2">
              {question.is_active ? (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    changestatus(question.questions_id, 0);
                  }}
                >
                  {" "}
                  InActive{" "}
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                    changestatus(question.questions_id, 1);
                  }}
                >
                  {" "}
                  Active{" "}
                </button>
              )}
            </div>
          </div>
        </div>
    </>
  )
}

export default QuestionDetails