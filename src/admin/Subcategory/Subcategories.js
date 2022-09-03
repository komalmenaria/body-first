import React, { useState, useEffect } from 'react'
import axios from 'axios'
import List from './List'
import config from "../../Config"
import Details from './Details'
import AddSubcategory from './AddSubcategory'

const Subcategories = () => {

    const [subcategorylist, setsubcategorylist] = useState([]);
    const [subcatdetails, setsubcatdetails] = useState(false)

    async function changestatus(id, status) {
        try {
            await axios.patch(`${config.BASE_URL}subcat/${id}`, {
                is_active: status
            });
            await getallsubcategories();
            getsubcatdetails(id);
        } catch (error) {
            alert(error.message)
        }
    }

    async function getallsubcategories() {
        return new Promise(async (resolve, reject) => {
            let data = await axios.get(`${config.BASE_URL}subcat`);
            // console.log(data)
            setsubcategorylist(data.data.data);
            resolve(data);
        })
    }

    function getsubcatdetails(id) {
        let subcategory = subcategorylist.find((e) => e.subcat_id === id);
        if (subcategory) setsubcatdetails(subcategory);
    }

    useEffect(() => {
        getallsubcategories();
    }, [])

    return (
        <>
            <div className="container py-2 ">
                <AddSubcategory getallsubcategories={getallsubcategories} />
            </div>
            <div className="container d-flex ">
                <div className="py-2">
                    <table className="table table-bordered table-hover ">
                        <thead>
                            <tr>
                                <th className="table-cell-padding-x px-5" scope="col">ID</th>
                                <th className="table-cell-padding-x px-5" scope="col">Subcategory Name</th>
                                <th className="table-cell-padding-x px-5" scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody >
                            {subcategorylist.length
                                ? subcategorylist.map((subcategory, index) => {
                                    return (
                                        <List subcategory={subcategory} key={index} getsubcatdetails={getsubcatdetails} />
                                    );
                                }) : "Subcategories Not found"}
                        </tbody>
                    </table>
                </div>
                <div>
                    {subcatdetails && <Details subcategory={subcatdetails} changestatus={changestatus} />}
                </div>
            </div>

        </>
    )
}

export default Subcategories