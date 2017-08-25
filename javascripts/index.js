$(document).ready(() => {
   onePlayerSelect()
   twoPlayerSelect()
})

function twoPlayerSelect() {
  $("#two-player").on('click', function() {
    twoPlayerSelection()
  })
}

function twoPlayerSelection() {
  $("#ready").show()
  $("#1-player-start").hide()
  $("#2-player-start").show()
  $("#select-game").remove()
  startTwoPlayer()
}

function startTwoPlayer() {
  $("#startbutton-2P").click(() => {
    startTwoPlayerGame()
  })
}

function startTwoPlayerGame() {
  $("#gameboard").show()
  $("#2-player-start").hide()
  let game = new TwoPlayerGame()
  resetTwoPlayerGame(game)
  game.pictureCycler()
  restartTwoPlayerGame()
  }

function restartTwoPlayerGame() {
  $("#play-again2").click(() => {
    $("#gameboard").hide()
    $("#scores").hide()
    $("li").remove()
    $("#ready").show()
    $("#1-player-start").hide()
    $("#2-player-start").show()
  })
}

function onePlayerSelect() {
  $("#one-player").on('click', function() {
    playerOneSelection()
  })
}

function playerOneSelection() {
  $("#ready").show()
  $("#1-player-start").show()
  $("#2-player-start").hide()
  $("#select-game").hide()
  startOnePlayer()
}

function startOnePlayer() {
  $("#startbutton-1P").click(() => {
    startGame()
  })
}

function startGame() {
  $("#gameboard").show()
  $("#1-player-start").hide()
  let game = new Game()
  resetOnePlayerGame(game)
  // game.pictureCycler()
  var renderScores = game.pictureCycler()
  renderScores.then(() => {
    game.renderScores()
  })
  restartGame()
}

function restartGame() {
  $("#play-again").click(() => {
    $("#gameboard").hide()
    $("#scores").hide()
    $("li").remove()
    $("#ready").show()
    $("#1-player-start").show()
    $("#2-player-start").hide()
  })
}

  function resetOnePlayerGame(game){
    game.correct.length = []
    game.clicked.length = []
    game.shown.length = []
    game.counter ? game.counter = 0 : null
  }

  function resetTwoPlayerGame(game){
    this.shown = []
    this.clickedPlayerOne = []
    this.clickedPlayerTwo = []
    this.correctPlayerOne = []
    this.correctPlayerTwo = []
    this.counterPlayerOne = 0
    this.counterPlayerTwo = 0
  }
