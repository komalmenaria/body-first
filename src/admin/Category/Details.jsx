import React from "react";

const Details = ({ category, changestatus }) => {
  return (
    <div>
      <>
        <div className="card position-fixed mx-5 my-2 px-3 ">
          <div className="container d-flex justify-content-center  align-items-start">
            <div className=" d-flex flex-column px-3 py-3 justify-content-center text-center">
              <h5 className="card-text">Category Icon</h5>
              <img
                src={category.cat_img}
                className="card-img-top img-fluid img-thumbnail"
                alt={category.cat_name}
              />
            </div>
            <div className=" d-flex flex-column px-3 py-3 justify-content-center text-center">
              <h5 className="card-text">Product Image</h5>
              <img
                src={category.product_img}
                className="card-img-top img-fluid img-thumbnail"
                alt={category.cat_name}
              />
            </div>
            <div className=" d-flex flex-column px-3 py-3 justify-content-center text-center">
              <h5 className="card-text">Poster Image</h5>
              <img
                src={category.poster_img}
                className="card-img-top img-fluid img-thumbnail"
                alt={category.cat_name}
              />
            </div>
            <div className=" d-flex flex-column px-3 py-3 justify-content-center text-center">
              <h5 className="card-text">Promo Image</h5>
              <img
                src={category.promo_img}
                className="card-img-top img-fluid img-thumbnail"
                alt={category.cat_name}
              />
            </div>
          </div>
          {category?.subcat_ids?.length ? (
            <div> <h6>SUB CATEGORIES</h6>
              <div className=" d-flex">
               
                {category?.subcat_ids.map((sub_cat) => {
                  return (
                    <>
                      <span class="badge text-bg-primary mx-2">
                        {sub_cat.subcat_name}
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
            <h5 className="card-title text-center ">
              Name : {category.cat_name}
            </h5>
            <p className="card-text text-center ">
              {" "}
              Description : {category.cat_desc}
            </p>

            <div className="d-grid gap-2">
              {category.is_active ? (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    changestatus(category.cat_id, 0);
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
                    changestatus(category.cat_id, 1);
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
    </div>
  );
};

export default Details;
