import axios from "axios"
 
import Config from "../Config"
import {GET_OTP,VERIFY_OTP} from '../Constant'

export const getOtp=(body)=>async(dispatch)=>{
    return new Promise( async(resolve,resject)=>{
        try {
            dispatch({
                type:GET_OTP+"REQUEST"
            })
            await axios.post(`${Config.BASE_URL}${Config.GET_OTP}`,body)
            dispatch({
                type:GET_OTP+"SUCCESS",
                payload:body
            })
             resolve(body)
        } catch (error) {
             
            dispatch({
                type: GET_OTP+"FAILED",
                payload:error.response.data.message || "Network Issue",
            })
            resject(error)
        }
    })
 
     
}

export const verifyOtp=(body)=>async(dispatch)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            dispatch({
                type:VERIFY_OTP+"REQUEST"
            })
            let {data}= await axios.post(`${Config.BASE_URL}${Config.VERIFY_OTP}`,body)
            console.log(data)
            dispatch({
                type:VERIFY_OTP+"SUCCESS",
                payload:data.data
            })
            resolve(data.data)
            localStorage.setItem('user',JSON.stringify(data.data))
        } catch (error) {
            
            dispatch({
                type: VERIFY_OTP+"FAILED",
                payload:error.response.data.message || "Network Issue",
            })
            reject(error)
    
        } 
    })
 
}

