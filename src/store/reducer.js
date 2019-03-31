import { fromJS } from 'immutable'
import * as constants from './constants'
import { game_util } from "../components/utility"

const defaultState = fromJS({
    gameData:[...game_util.gameData],
    square: [],
    nextSquare:[],
    pos_X: 0,
    pos_Y: 3,
    start: null,
    gameDataTemp: [...game_util.gameData],
    time : 0,
    score : 0,
    interval: 300,
    gameover: false,

})

export default(state = defaultState, action) => {
    switch(action.type){
        case constants.START:
            return state.merge({
                square : fromJS(action.square),
                nextSquare : fromJS(action.nextSquare),
                start: true,
            })
        case constants.CONTINUE:
            return state.set('start', !action.start)
        case constants.MOVE_LEFT:
            return state.merge({
                pos_Y : action.pos_Y,
            })
        case constants.MOVE_RIGHT:
            return state.merge({
                pos_Y : action.pos_Y,
            })
        case constants.MOVE_DOWN:
            return state.merge({
                pos_X : action.pos_X,
            })
        case constants.SQUARE_ROTATE:
            return state.merge({
                square : fromJS(action.square),
            })
        case constants.FIX_SQUARE:
            return state.merge({
                gameData: fromJS(action.gameData),
            })
        case constants.NEXT:
            let next_square = action.nextSquare
            return state.merge({
                square: state.get('nextSquare'),
                pos_X : 0,
                pos_Y : 3,
                nextSquare: fromJS(next_square),
            })
        case constants.CLEAN_LINE:
            return state.merge({
                gameData: fromJS(action.gameData),
                score : state.get('score') + game_util.getScore(action.cleanLine)
            })
        case constants.SET_TIME:
            return state.merge({
                time: action.time + action.interval,
            })
        case constants.GAME_OVER:
            return state.merge({
                start : null,
                gameover : true,
            })
        case constants.GUEST_CHANGE:
            return state.set('competitorData', fromJS(action.competitorData))
        default:
            return state
    }
}