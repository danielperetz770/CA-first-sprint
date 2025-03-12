'use strict'

const MINE = '💣'
const EMPTY = ' '
//The model board
var gBoard = {
    minesAroundCount: 4,
    isCovered: true,
    isMine: false,
    isMarked: false
}
// This is an object by which the board size
// is set (in this case: 4x4 board and how
// many mines to place)
var gLevel = {
    SIZE: 4,
    MINES: 2
}
// Holds the current game state:
// isOn: true when game is on
// revealedCount: How many cells are
// revealed
// markedCount: How many cells are
// marked (with a flag)
// secsPassed: How many seconds passed
var gGame = {
    isOn: false,
    revealedCount: 0,
    markedCount: 0,
    secsPassed: 0
}


// Called when page loads

function onInit() {
    gBoard = buildBoard()
    renderBoard(gBoard)
}

// Builds the board
// Set some mines
// Call setMinesNegsCount()
// Return the created board
function buildBoard() { // create board
    const size = gLevel.SIZE
    const numMines = gLevel.MINES
    const board = []

    for (var i = 0; i < size; i++) {
        board[i] = []

        for (var j = 0; j < size; j++) {
            board[i][j] = {
                minesAroundCount: 0,
                isCovered: true,
                isMine: false,
                isMarked: false
            }
            if (i === 1 && j === 2) {
                board[i][j].isMine = MINE
            }
        }
    }

    console.table(board)
    return board
}


// Count mines around each cell
// and set the cell's
// minesAroundCount.
function setMinesNegsCount(board) {

    const size = board.length

    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            if (board[i][j].isMine) continue

            var mineCount = 0
        }
    }




}

// Render the board as a <table>
// to the page
function renderBoard(board) {
    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < board[0].length; j++) {

            const cell = board[i][j]
            const className = `cell cell-${i}-${j}`

            strHTML += `<td class="${className}">
                            ${cell + ''}
                        </td>`
        }
        strHTML += '</tr>'
    }
    const elContainer = document.querySelector('.board')
    elContainer.innerHTML = strHTML //update dom
    console.log('board:',board)
}

// Called when a cell is clicked
function onCellClicked(elCell, i, j) {

}

// Called when a cell is rightclicked
// See how you can hide the context
// menu on right click
function onCellMarked(elCell) {

}

// When the user clicks a cell with
// no mines around, reveal not
// only that cell, but also its
// neighbors.
// NOTE: start with a basic
// implementation that only
// reveals the non-mine 1st degree
// neighbors
// BONUS: Do it like the real
// algorithm (see description at
// the Bonuses section below)
function expandReveal(board, elCell, i, j) {

}
