import { fromJS } from 'immutable'
import * as CTT from './constants'
import { game_util } from "../utility"


const defaultState = fromJS({
    gameData:[...game_util.gameData],
    square: [],
    nextSquare:[],
    pos_X: 0,
    pos_Y: 3,
    gameDataTemp: [...game_util.gameData],
    time : 0,
    score : 0,
    gameover: false,
})

export default(state = defaultState, action) => {
    switch(action.type){
        case CTT.START:
            return state.merge({
                square : fromJS(action.square),
                nextSquare : fromJS(action.nextSquare),
            })
        case CTT.MOVE_LEFT:
            return state.merge({
                pos_Y : action.pos_Y,
            })
        case CTT.MOVE_RIGHT:
            return state.merge({
                pos_Y : action.pos_Y,
            })
        case CTT.MOVE_DOWN:
            return state.merge({
                pos_X : action.pos_X,
            })
        case CTT.SQUARE_ROTATE:
            return state.merge({
                square : fromJS(action.square),
            })
        case CTT.FIX_SQUARE:
            return state.merge({
                gameData: fromJS(action.gameData),
            })
        case CTT.NEXT:
            let next_square = action.nextSquare
            return state.merge({
                square: state.get('nextSquare'),
                pos_X : 0,
                pos_Y : 3,
                nextSquare: fromJS(next_square),
            })
        case CTT.CLEAN_LINE:
            return state.merge({
                gameData: fromJS(action.gameData),
                score : state.get('score') + game_util.getScore(action.cleanLine)
            })
        case CTT.SET_TIME:
            return state.merge({
                time: action.time + action.interval,
            })
        case CTT.GAME_OVER:
            return state.merge({
                gameover : true,
            })
        case CTT.GUEST_CHANGE:
            return state.set('competitorData', fromJS(action.competitorData))
        default:
            return state
    }
}