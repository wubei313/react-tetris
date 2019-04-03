import * as constants from './constants'


export const start = (square, nextSquare) => ({
    type: constants.START,
    square: square,
    nextSquare: nextSquare,
})

export const wait_person = () => ({
    type: constants.WAIT,
})

export const game_continue = (start) => ({
    type: constants.CONTINUE,
    start: start
})

export const move_left = (y) => ({
    type: constants.MOVE_LEFT,
    pos_Y : y,
})

export const move_right = (y) => ({
    type: constants.MOVE_RIGHT,
    pos_Y : y,
})

export const move_down = (x) => ({
    type: constants.MOVE_DOWN,
    pos_X : x,
})


export const square_rotate = (square) => ({
    type: constants.SQUARE_ROTATE,
    square: square
})

export const fix_square = (gameData) => ({
    type: constants.FIX_SQUARE,
    gameData: gameData,
})

export const next = (nextSquare) => ({
    type: constants.NEXT,
    nextSquare: nextSquare,
})

export const clean_line = (gameData, cleanLine) => ({
    type: constants.CLEAN_LINE,
    cleanLine: cleanLine,
    gameData: gameData,
})

export const add_line = (gameData) => ({
    type: constants.ADD_LINE,
    gameData: gameData,
})
export const set_Time = (time, interval) => ({
    type: constants.SET_TIME,
    time: time,
    interval: interval,
})

export const game_Over = () => ({
    type: constants.GAME_OVER,

})


export const change = (data) => ({
    type: constants.GUEST_CHANGE,
    competitorData: data,
})