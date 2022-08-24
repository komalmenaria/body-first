
import { GET_CATEGORY} from "../Constant"
const intiialState = {
   categories:[],
   loading:false,
   error:null,
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
        default:
            return state
    }
}
export default categoryReducer