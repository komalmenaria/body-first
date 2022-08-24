import axios from "axios"
 
import Config from "../Config"
import {GET_OTP,VERIFY_OTP} from '../Constant'

export const getOtp=(body)=>async(dispatch)=>{
    try {
        dispatch({
            type:GET_OTP+"REQUEST"
        })
        axios.post(`${Config.BASE_URL}${Config.GET_OTP}`,body)
        dispatch({
            type:GET_OTP+"SUCCESS",
            payload:body
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: GET_OTP+"FAILED",
            payload:error.message,
        })

    }   
}

export const verifyOtp=(body)=>async(dispatch)=>{
    try {
        dispatch({
            type:VERIFY_OTP+"REQUEST"
        })
        let {data}= axios.post(`${Config.BASE_URL}${Config.VERIFY_OTP}`,body)
        dispatch({
            type:VERIFY_OTP+"SUCCESS",
            payload:data.data
        })
        localStorage.setItem('user',JSON.stringify(data.data))
    } catch (error) {
        console.log(error)
        dispatch({
            type: VERIFY_OTP+"FAILED",
            payload:error.message,
        })

    } 
}

