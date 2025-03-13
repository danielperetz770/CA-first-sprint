'use strict'

const MINE = '💣'
const EMPTY = ' '
const FLAG = '🚩'
//The model board
var gBoard = []
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
    isVictory: false,
    revealedCount: 0,
    markedCount: 0,
    secsPassed: 0
}

// Called when page loads
function onInit() {
    gGame.isOn = true
    gBoard = buildBoard()
    // setMinesNegsCount(gBoard)
    renderBoard(gBoard)
    closeModal()
}
// Builds the board
// Set some mines
// Call setMinesNegsCount()
// Return the created board
function buildBoard() {
    const size = gLevel.SIZE
    const board = []

    for (var i = 0; i < size; i++) {
        board[i] = []
        for (var j = 0; j < size; j++) {
            const cell = {
                minesAroundCount: 0,
                isCovered: true,
                isMine: false,
                isMarked: false
            }
            if (i == 0 && j == 3 || i == 3 && j == 1) cell.isMine = true
            board[i][j] = cell
        }
    }
    console.table(board)
    return board
}

// Count mines around each cell
// and set the cell's
// minesAroundCount.
function setMinesNegsCount(board) {
    const rows = board.length
    const cols = board[0].length
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (board[i][j].isMine) continue
            var currCell = board[i][j]
            currCell.i = i
            currCell.j = j
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
            strHTML += `<td class="${className}" onclick="onCellClicked(this, ${i}, ${j})">
            
                            ${cell.isMine ? MINE : cell.isCovered ? '' : cell.minesAroundCount}
                        </td>`
        }
        strHTML += '</tr>'
    }
    onCellMarked()
    const elContainer = document.querySelector('.board')
    elContainer.innerHTML = strHTML // update the DOM
    console.log('board:', board)
}

// Called when a cell is clicked
function onCellClicked(elCell, i, j) {
    const cell = gBoard[i][j]
    // Uncover the cell
    cell.isCovered = false
    elCell.classList.add('uncovered')
    if (cell.isMine) {
        elCell.innerHTML = MINE
    } else {
        elCell.innerHTML = cell.minesAroundCount > 0 ? cell.minesAroundCount : ''
    }
    gGame.revealedCount++

}

function getEmptyLocation(board) {
    var emptyLocations = []
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            if (board[i][j] === EMPTY) {
                emptyLocations.push({ i, j })
            }
        }
    }
    if (!emptyLocations.length) return null
    var randIdx = getRandomInt(0, emptyLocations.length)
    return emptyLocations[randIdx]
}
// Called when a cell is rightclicked
// See how you can hide the context
// menu on right click
function onCellMarked(elCell) {
    oncontextmenu = "javascript:alert('success!');return false;"
}

function expandReveal(board, elCell, i, j) {

}

function checkGameOver() {
    renderBoard()
    isOn = false
    var msg = gGame.isVictory ? 'You Won!!!' : 'Game Over'
    openModal(msg)
}


function openModal(msg) {
    const elModal = document.querySelector('.modal')
    const elMsg = elModal.querySelector('.msg')
    elMsg.innerText = msg
    elModal.style.display = 'block'
}

function closeModal() {
    const elModal = document.querySelector('.modal')
    elModal.style.display = 'none'
}