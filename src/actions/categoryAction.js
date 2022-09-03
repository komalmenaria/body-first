import axios from "axios"

import Config from "../Config"
import { GET_CATEGORY, GET_QUESTION, GET_PRODUCTS, ADD_TO_CART, CHECKOUT, GET_COUPON, SET_ANSWERS } from '../Constant'

export const getCategory = () => async (dispatch) => {
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

        try {
            dispatch({
                type: GET_CATEGORY + "REQUEST"
            })
            let { data } = await axios.get(`${Config.BASE_URL}${Config.GET_CATEGORY}`, config)
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

export const getQuestions = (body) => async (dispatch) => {
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
    return new Promise(async (resolve, reject) => {
        try {
            dispatch({
                type: GET_QUESTION + "REQUEST"
            })

            let { data } = await axios.post(`${Config.BASE_URL}${Config.GET_QUESTION}`, body, config)
            dispatch({
                type: GET_QUESTION + "SUCCESS",
                payload: { questions: data.data, title: body.title }
            })
            resolve(data)
        } catch (error) {
            dispatch({
                type: GET_QUESTION + "FAILED",
                payload: error.response.data.message || "Network Issue",
            })
            reject(error)
        }
    })
}



export const getProducts = (body) => async (dispatch) => {
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
    return new Promise(async (resolve, reject) => {
        try {
            dispatch({
                type: GET_PRODUCTS + "REQUEST",
                payload: body
            })
            let { data } = await axios.post(`${Config.BASE_URL}${Config.GET_PRODUCTS}`, body, config)
            dispatch({
                type: GET_PRODUCTS + "SUCCESS",
                payload: { products: data.data, answers: body.answers }
            })
            resolve(data)
        } catch (error) {
            dispatch({
                type: GET_PRODUCTS + "FAILED",
                payload: error.response.data.message || "Network Issue",
            })
            reject(error)
        }
    })
}

export const addToCart = (body) => async (dispatch) => {
    return new Promise(async (resolve, reject) => {
        try {


            dispatch({
                type: ADD_TO_CART + "SUCCESS",
                payload: body
            })
            resolve(body)
        } catch (error) {
            dispatch({
                type: ADD_TO_CART + "FAILED",
                payload: error.response.data.message || "Network Issue",
            })
            reject(error)
        }
    })
}

export const addToCheckout = (body) => async (dispatch) => {
    return new Promise(async (resolve, reject) => {
        try {


            dispatch({
                type: CHECKOUT + "SUCCESS",
                payload: body
            })
            resolve(body)
        } catch (error) {
            dispatch({
                type: CHECKOUT + "FAILED",
                payload: error.response.data.message || "Network Issue",
            })
            reject(error)
        }
    })
}
export const getCoupon = (body) => async (dispatch) => {
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
    return new Promise(async (resolve, reject) => {
        try {


            dispatch({
                type: GET_COUPON + "REQUEST",
                payload: body
            })
            let { data } = await axios.post(`${Config.BASE_URL}${Config.GET_COUPON}`, body, config)

            dispatch({
                type: GET_COUPON + "SUCCESS",
                payload: data.data.coupon
            })
            resolve(body)
        } catch (error) {
            dispatch({
                type: GET_COUPON + "FAILED",
                payload: error.response.data.message || "Network Issue",
            })
            reject(error)
        }
    })
}




export const setAnswers = (body) => async (dispatch) => {
    return new Promise(async (resolve, reject) => {
        try {


            dispatch({
                type: SET_ANSWERS + "SUCCESS",
                payload: body
            })
            resolve(body)
        } catch (error) {
            dispatch({
                type: SET_ANSWERS + "FAILED",
                payload: error.response.data.message || "Network Issue",
            })
            reject(error)
        }
    })
}