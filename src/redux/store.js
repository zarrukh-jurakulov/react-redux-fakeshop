import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './reducers/index'
import thunk from 'redux-thunk'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

const store = createStore(reducers, composedEnhancer);

export default store