import React from 'react'


class game {
    //初始数据
    constructor(){
        this.gameData = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
        // this.gameData = [
        //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        //     [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
        //     [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
        //     [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
        //     [1, 1, 1, 1, 0, 1, 1, 1, 1, 1]
        // ]
        this.squares = [
            [
                [0, 2, 0, 0],
                [0, 2, 0, 0],
                [0, 2, 0, 0],
                [0, 2, 0, 0]
            ],
            [
                [0, 0, 0, 0],
                [0, 2, 2, 0],
                [0, 2, 2, 0],
                [0, 0, 0, 0]
            ],
            [
                [0, 0, 0, 0],
                [0, 2, 0, 0],
                [0, 2, 2, 0],
                [0, 0, 2, 0]
            ],
            [
                [0, 0, 0, 0],
                [0, 0, 2, 0],
                [0, 2, 2, 0],
                [0, 2, 0, 0]
            ],
            [
                [0, 0, 0, 0],
                [0, 2, 0, 0],
                [0, 2, 0, 0],
                [0, 2, 2, 0]
            ],
            [
                [0, 0, 0, 0],
                [0, 0, 2, 0],
                [0, 0, 2, 0],
                [0, 2, 2, 0]
            ],
            [
                [0, 0, 0, 0],
                [0, 2, 2, 2],
                [0, 0, 2, 0],
                [0, 0, 0, 0]
            ],
        ]
        this.square = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    }

    //函数包
    generateSquare(x, y) {
        if(y === undefined) {
            return this.square
        }
        let square = this.squares[x]
        square = this.rotateSquare(square, y)
        return square
    }
    randomNumbers() {
        let x = Math.floor(Math.random() * 7)
        let y = Math.floor(Math.random() * 4)
        return [x, y]
    }
    randomLine() {
        let line = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        let l = line.map(() => Math.floor(Math.random() *2))
        return l
    }
    setData = (data, X, Y, square) => {
        square = this.generateSquare(...square)
        for (let i = 0; i < square.length; i++){
            for (let j = 0; j < square.length; j++){
                let row = X + i
                let col = Y + j
                if(row >= 0 && row < data.length && col >= 0 && col < data[0].length) {
                    if(data[row][col] === 0) {
                        data[row][col] = square[i][j]
                    }
                }
            }
        }
        return data
    }
    handleInitDiv = (matrix) => {
        return matrix.map((items, row) => (
            items.map((item, column) => {
                let key = row + ' ' + column

                let style = {
                    top: row * 20 + 'px',
                    left: column * 20 + 'px'
                }

                let classname = 'none'
                if (item === 1) {
                    classname = 'done'
                } else if (item === 2) {
                    classname = 'current'
                }

                return <div key={key}
                            className={classname}
                            style={style}
                ></div>
            })
        ))
    }

    check (x, y ,i ,j, gameData) {
        if (x + i < 0) {
            return false
        } else if (x + i >= gameData.length) {
            return false
        } else if (y + j < 0) {
            return false
        } else if (y + j >= gameData[0].length) {
            return false
        } else if (gameData[x + i][y + j] === 1){
            return false
        } else {
            return true
        }
    }

    isValid(x, y, square, gameData) {
        square = this.generateSquare(...square)
        for (let i = 0; i < square.length; i++) {
            for (let j = 0; j < square[0].length; j++) {
                if (square[i][j] !== 0) {
                    if (!this.check(x, y, i, j, gameData)) {
                        return false
                    }
                }
            }
        }
        return true
    }

    blockTurnLeft(data) {
        let rows = data.length
        let column = data[0].length
        let newArr = []
        for(let i = 0; i < column; i++){
            let tempArr = []
            for(let j = rows - 1; j >= 0; j--){
                tempArr.push(data[j][i])
            }
            newArr.push(tempArr)
        }
        return newArr
    }

    rotateSquare(square, times) {
        for (let i = 0; i < times; i++) {
            square = this.blockTurnLeft(square)
        }
        return square
    }

    fixSquare = (gameData, x, y, square) => {
        square = this.generateSquare(...square)
        for (var i = 0; i < square.length; i++) {
            for(var j = 0; j < square[0].length; j++) {
                if(square[i][j] === 2) {
                    gameData[x + i][y + j] = 1
                }
            }
        }
        return gameData
    }

    cleanLine (gameData) {
        let data = []
        for (let i = 0; i < gameData.length; i++) {
            let check = true
            for (let j = 0; j < gameData[0].length; j++) {
                if(gameData[i][j] !== 1){
                    check = false
                    break
                }
            }
            if(!check) {
                data.push(gameData[i])
            }
        }
        let cleanLine = 20 - data.length
        for (let i = 0; i < cleanLine; i++) {
            data.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
        }
        return {data, cleanLine}
    }

    addLine(gameData, lines) {
        let line = lines - 1
        for (let i = 0; i < line; i++) {
            gameData.push(this.randomLine())
        }
        gameData.splice(0, line)
        return gameData
    }

    getScore (lines) {
        switch (lines){
            case 1 :
                return 10
            case 2 :
                return 30
            case 3:
                return 60
            case 4:
                return 100
            default:
                return 0
        }
    }
}

export const game_util = new game()


