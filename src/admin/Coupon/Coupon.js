import React from 'react'

const Coupon = () => {
    return (
        <div className="container m-5">
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Coupon