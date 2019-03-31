import { createStore , applyMiddleware, combineReducers} from 'redux'
import myReducer from './reducer'
import competitorReducer from '../components/competitor/reducer'

// 方案一，放置在中间件里，看看效果如何
export const socket = require('socket.io-client')('http://localhost:8000')

//先来个简单的logger中间件试试感觉
function logger(socket) {
    return store => (next) => (action) => {
        if(!action.type.includes('CPT_')) {
            socket.emit('change', action)
        }
        return next(action)
    }
}

const reducer = combineReducers({
    my: myReducer,
    competitor: competitorReducer,
})

const store = createStore(reducer, applyMiddleware(logger(socket)))

export default store