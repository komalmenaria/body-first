import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import loginReducer from './reducers/loginReducer';
import categoryReducer from './reducers/categoryReducer';
const rootReducer=combineReducers({
    loginData:loginReducer,
    categoryData:categoryReducer
})

let initialState={}

const middleware=[thunk]
const store=createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;
