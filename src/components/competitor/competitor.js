import React, { Component } from 'react'
import '../../Tetris.css'
import { connect } from 'react-redux'
import { game_util } from '../utility'
import { socket } from '../../store'
import * as constants from '../../store/constants'
import * as actions from '../../store/actions'


class Competitor extends Component {
    componentDidMount() {
        socket.on('message', (data) => {
            console.log('data:', data)
        })
        socket.on('change', (action) => {
            if(action.type == constants.CLEAN_LINE) {
                if(action.cleanLine >= 2 ){
                    let gameData = game_util.addLine(this.props.data, action.cleanLine)
                    this.props.addLine(actions.add_line(gameData))
                }
            }
           this.props.dispatchAction(action)
        })
    }

    render() {
        let {nextSquare, pos_X, pos_Y, square, gameData,
             time, score, gameover, win,
        } = this.props
        return (
            <div>
                <div className={'square'} id={'local'}>
                    <div className={'title'}>对方的游戏区域</div>
                    <div className={'game'}>
                        {game_util.handleInitDiv(game_util.setData(gameData, pos_X, pos_Y, square))}
                        {gameover ? <div className={'gameover'}>Game OVER</div> : null}
                        {win ? <div className={'win'}>You Win</div> : null}
                    </div>
                    <div className={'next'}>{game_util.handleInitDiv(
                        game_util.generateSquare(...nextSquare))}</div>
                    <div className={'time'}>
                        <div>time: {Math.floor(time / 1000)}s</div>
                        <div>score: {score}</div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        start: state.competitor.get('start'),
        square: state.competitor.get('square').toJS(),
        nextSquare: state.competitor.get('nextSquare').toJS(),
        gameData: state.competitor.get('gameData').toJS(),
        pos_X: state.competitor.get('pos_X'),
        pos_Y: state.competitor.get('pos_Y'),
        time: state.competitor.get('time'),
        score: state.competitor.get('score'),
        gameover: state.competitor.get('gameover'),

        win: state.my.get('gameover'),
        data: state.my.get('gameData').toJS(),
    }
}

const mapDispatch = (dispatch) => {
    return {
        dispatchAction(action) {
            action.type = 'CPT_' + action.type
            dispatch(action)
        },
        addLine(action) {
            dispatch(action)
        }
    }

}
export default connect(mapState, mapDispatch)(Competitor)