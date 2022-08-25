import axios from "axios"

import Config from "../Config"
import { ASSIGN_AGE_AND_GENDER } from '../Constant'

export const assingAgeAndGender = (body) => async (dispatch) => {
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
    return new Promise(async (resolve, resject) => {
        console.log(config)
        try {
            dispatch({
                type: ASSIGN_AGE_AND_GENDER + "REQUEST"
            })
            await axios.post(`${Config.BASE_URL}${Config.ASSIGN_AGE_AND_GENDER}`, body, config)
            dispatch({
                type: ASSIGN_AGE_AND_GENDER + "SUCCESS",
                payload: body
            })
            resolve(body)
        } catch (error) {

            dispatch({
                type: ASSIGN_AGE_AND_GENDER + "FAILED",
                payload: error.response.data.message || "Network Issue",
            })
            resject(error)
        }
    })


}



