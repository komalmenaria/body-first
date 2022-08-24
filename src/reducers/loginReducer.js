
import { GET_OTP, VERIFY_OTP } from "../Constant"
const intiialState = {
    user_phone: "",
    is_privacy: 0,
    user_name: "",
    loading: false,
    user: null,
    error: null
}
const loginReducer = (state = intiialState, action) => {
    switch (action.type) {


        case GET_OTP + "REQUEST":

            return {
                ...state,
                loading: true
            }
        case GET_OTP + "SUCCESS":

            return {
                ...state,
                loading:false,
                user_name: action.payload.user_name,
                is_privacy: action.payload.is_privacy,
                user_phone: action.payload.user_phone
            }
            case GET_OTP + "FAILED":

                return {
                    ...state,
                    loading:false,
                    error:action.payload
                }
    
        default:
            return state
    }
}
export default loginReducer