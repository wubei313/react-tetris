import { Component }from 'react'
import { connect } from "react-redux"
import { game_util } from "./utility"
import * as actions from "../store/actions"

class Start extends Component {
    constructor(props) {
        super(props)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.autoNext = this.autoNext.bind(this)
    }

    render(){
        return (
            ''
        )
    }

    autoNext() {
        let {pos_X, pos_Y, gameData, square, nextSquare, time, interval,
            moveDown, next, setTime, gameOver,
        } = this.props
        setTime(time, interval)
        if(moveDown(gameData, pos_X, pos_Y, square)){
        } else {
            if(pos_X === 0) {
                gameOver()
            } else {
                next(nextSquare)
            }
        }
    }
    handleKeyDown(e) {
        let { pos_X, pos_Y, gameData, square, nextSquare,
            moveLeft, moveRight, moveDown, squareRotate, next,
        } = this.props
        if (e.keyCode === 38) { // up
            squareRotate(gameData, pos_X, pos_Y, square)
        } else if(e.keyCode === 39) { // right
            moveRight(gameData, pos_X, pos_Y, square)
        } else if(e.keyCode === 40) { // down
            moveDown(gameData, pos_X, pos_Y, square)
        } else if(e.keyCode === 37) { // left
            moveLeft(gameData, pos_X, pos_Y, square)
        } else if(e.keyCode === 32) { // space
            let x = pos_X + 1
            while(game_util.isValid(x, pos_Y, square, gameData)) {
                x += 1
            }
            moveDown(gameData, x - 1, pos_Y, square)
            next(nextSquare)
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.autoNext, this.props.interval)
        document.addEventListener('keydown', this.handleKeyDown)

    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown)
        clearInterval(this.interval)
    }
}

const mapStateToProps = (state) => {
    return {
        start: state.my.get('start'),
        square: state.my.get('square').toJS(),
        nextSquare: state.my.get('nextSquare').toJS(),
        gameData: state.my.get('gameData').toJS(),
        pos_X: state.my.get('pos_X'),
        pos_Y: state.my.get('pos_Y'),
        time: state.my.get('time'),
        score: state.my.get('score'),
        interval: state.my.get('interval'),
        gameover: state.my.get('gameover'),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        moveLeft(gameData, pos_X, pos_Y, square) {
            let y = pos_Y - 1
            if(game_util.isValid(pos_X, y, square,  gameData)) {
                dispatch(actions.move_left(y))
            }
        },
        moveRight(gameData, pos_X, pos_Y, square) {
            let y = pos_Y + 1
            if(game_util.isValid(pos_X, y, square, gameData)) {
                dispatch(actions.move_right(y))
            }
        },
        moveDown(gameData, pos_X, pos_Y, square) {
            let x = pos_X + 1
            if(game_util.isValid(x, pos_Y, square, gameData)) {
                dispatch(actions.move_down(x))
                return true
            } else {
                gameData = game_util.fixSquare(gameData, pos_X, pos_Y, square)
                dispatch(actions.fix_square(gameData))
                //fix之后是检查是否消行
                let { data, cleanLine } = game_util.cleanLine(gameData)
                dispatch(actions.clean_line(data, cleanLine))
                return false
            }
        },
        squareRotate(gameData, pos_X, pos_Y, square) {
            let s = [...square]
            s[1] = s[1] + 1
            if(game_util.isValid(pos_X, pos_Y, s, gameData)) {
                dispatch(actions.square_rotate(s))
            }
        },
        next() {
            let nextSquare = game_util.randomNumbers()
            dispatch(actions.next(nextSquare))
        },
        setTime(time, interval) {
            dispatch(actions.set_Time(time, interval))
        },
        gameOver() {
            dispatch(actions.game_Over())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Start)