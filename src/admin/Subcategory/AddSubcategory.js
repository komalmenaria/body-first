import React ,{useState} from 'react'
import axios from 'axios'
import config from '../../Config'

const AddSubcategory = ({getallsubcategories}) => {

  
  const [subcatename, setsubcatename] = useState('')
  const [subcatdesc, setsubcatdesc] = useState('')
  const [subcaticon, setsubcaticon] = useState('')
  const [subcatproduct, setsubcatproduct] = useState('')
  const [subcatposter, setsubcatposter] = useState('')
  const [subcatpromo, setsubcatpromo] = useState('')

  
  async function createsubcategory(event) {
    event.preventDefault();
    try {
      let form_data=new FormData(document.getElementById("subcategory_add"))
       
        await axios.post(`${config.BASE_URL}subcat`,form_data);
        getallsubcategories();
        document.getElementById("subcategory_add").reset();
        alert("Success")
    } catch (error) {
      console.log(error)
        alert(error.message)
    }
}


  const handleIcon = (e) => {
      console.log("submitting");
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
          setsubcaticon(reader.result);
      }
  }
  const handleProduct = (e) => {
      console.log("submitting");
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {

          setsubcatproduct(reader.result);
      }
  }
  const handlePoster = (e) => {
      console.log("submitting");
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
          setsubcatposter(reader.result);
      }
  }
  const handlePromo = (e) => {
      console.log("submitting");
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
          setsubcatpromo(reader.result);
      }
  }

  return (
    <>
     <div>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Subcategory
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className=" d-flex justify-content-between px-3 py-3">
                <h5 className="modal-title" id="exampleModalLabel">
                 Add Subcategory Details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form className="row g-3" id='subcategory_add' onSubmit={createsubcategory}>
                  <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">
                    Subcategory Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name='subcat_name'
                      id="inputAddress"
                      
                      required
                      onChange={(e) => {
                        setsubcatename(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">
                      Subcategory Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name='subcat_desc'
                      id="inputAddress2"
                      required
                      onChange={(e) => {
                        setsubcatdesc(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">
                    Subcategory Icon
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      name='subcat_img'
                      required
                      id="inputCity"
                      accept="image/*"
                      onChange={handleIcon}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">
                    Subcategory Product
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      name='product_img'
                      required
                      id="inputCity"
                      accept="image/*"
                      onChange={handleProduct}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">
                    Subcategory Poster
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="inputCity"
                      required
                      name='poster_img'
                      accept="image/*"
                      onChange={handlePoster}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">
                    Subcategory Promo
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      name='promo_img'
                      id="inputCity"
                      required
                      accept="image/*"
                      onChange={handlePromo}
                    />
                  </div>
                  <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                 
                >
                  Save changes
                </button>
              </div>
                </form>
              </div>
       
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddSubcategory