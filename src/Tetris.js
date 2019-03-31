import React from 'react'
import './Tetris.css'
import Start from './components/start'
import { connect } from 'react-redux'
import { game_util } from './components/utility'
import * as actions from './store/actions'
import Competitor from './components/competitor/competitor'

// class Tetris extends Component {
//     constructor(props){
//         super(props)
//     }
const Tetris = (props) => {
    let { start, nextSquare, pos_X, pos_Y, square, gameData,
        gameStart, time, score, gameover,
    } = props
    return (
        <div className={"main"}>
            <div className={'square'} id={'local'}>
                <div className={'title'}>我的游戏区域
                    <button
                        className={'start'}
                        onClick={() => gameStart(start)}
                    >{start ? <Start/> : 'start'}</button>
                </div>
                <div className={'game'}>
                    {game_util.handleInitDiv(game_util.setData(gameData, pos_X, pos_Y, square))}
                    {gameover ? <div className={'gameover'}>Game OVER</div> : null}
                </div>
                <div className={'next'}>{game_util.handleInitDiv(
                    game_util.generateSquare(...nextSquare))}</div>
                <div className={'time'}>
                    <div>time: {Math.floor(time / 1000)}s</div>
                    <div>score: {score}</div>
                </div>

            </div>
            <Competitor/>
        </div>
    )
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
        gameover: state.my.get('gameover'),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        gameStart(start) {
            console.log('gameStart')
            if(start == null) {
                //第一次初始化需要生成square and nextSquare
                let square = game_util.randomNumbers()
                let nextSquare = game_util.randomNumbers()
                dispatch(actions.start(square, nextSquare))
            } else {
                dispatch(actions.game_continue(start))
            }
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Tetris)
