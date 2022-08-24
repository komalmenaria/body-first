import axios from "axios"

import Config from "../Config"
import { GET_CATEGORY } from '../Constant'
let user = localStorage.getItem('user')
let token
if (user) {
    user = JSON.parse(user)
    token = user.token
}
let config = {
    headers: {
        token
    }
}
export const getCategory = () => async (dispatch) => {
    return new Promise(async (resolve, resject) => {
         
        try {
            dispatch({
                type: GET_CATEGORY + "REQUEST"
            })
          let {data} = await axios.get(`${Config.BASE_URL}${Config.GET_CATEGORY}`,config)
            dispatch({
                type: GET_CATEGORY + "SUCCESS",
                payload: data.data
            })
            resolve(data)
        } catch (error) {

            dispatch({
                type: GET_CATEGORY + "FAILED",
                payload: error.response.data.message || "Network Issue",
            })
            resject(error)
        }
    })


}



