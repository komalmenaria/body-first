
import { GET_CATEGORY,GET_QUESTION,GET_PRODUCTS,ADD_TO_CART,CHECKOUT,GET_COUPON} from "../Constant"
const intiialState = {
   categories:[],
   loading:false,
   error:null,
   questions:[],
   title:"",
   answers:[],
   products:[],
   cart:[],
   checkout:[],
   coupon:null
}
const categoryReducer = (state = intiialState, action) => {
    switch (action.type) {


        case GET_CATEGORY + "REQUEST":

            return {
                ...state,
                loading: true
            }
        case GET_CATEGORY + "SUCCESS":

            return {
                ...state,
                loading:false,
                categories:action.payload
            }
            case GET_CATEGORY + "FAILED":

                return {
                    ...state,
                    loading:false,
                    error:action.payload
                }
            case GET_QUESTION+"SUCCESS":
                return {
                    ...state,
                    questions:action.payload.questions,
                    title:action.payload.title
                }
            case GET_PRODUCTS+"SUCCESS":
                return {
                    ...state,
                    answers:action.payload.answers,
                    products:action.payload.products
                }
                case ADD_TO_CART+"SUCCESS":
                    return {
                        ...state,
                        cart:action.payload  
                    }
                case CHECKOUT+"SUCCESS":
                    return {
                        ...state,
                        checkout:action.payload  
                    }
                case GET_COUPON+"SUCCESS":
                    return {
                        ...state,
                        coupon:action.payload
                    }
        default:
            return state
    }
}
export default categoryReducer