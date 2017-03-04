$(document).ready(() => {
   playerOneSelection()
   playerTwoSelection()
    $("#startbutton-1P").on("click",startgame)
      $("#play-again").click(() => {
        $("li").remove()
        $("#scores").hide()
        startgame()
      })
    $("#startbutton-2P").on("click",startTwoPlayerGame)
    $("#play-again2").click(() => {
          $("li").remove()
          $("#scores").hide()
          startTwoPlayerGame()
        })
})

function startTwoPlayerGame() {
    $("#gameboard").show()
      let game = new TwoPlayerGame()
    resetGameBoard(game)
    $("#2-player-start").remove()
    var renderScores = game.pictureCycler()
    renderScores.then(() => {
        game.renderScores()
    })
}

function startgame() {
    $("#gameboard").show()
      let game = new Game()
    resetGameBoard(game)
    $("#1-player-start").remove()
    var renderScores = game.pictureCycler()
    renderScores.then(() => {
        game.renderScores()
    })
}

function resetGameBoard(game){
  game.counter = 0
  game.correct.length = 0
  game.shown.length = 0
  if (game.clickedPlayerTwo){
    game.clickedPlayerTwo.length = 0
    game.clickedPlayerOne.length = 0
  } else{
      game.clicked.length = 0
    }
  }


function playerOneSelection() {
  $("#one-player").on('click', function() {
     $("#ready").show()
   $("#1-player-start").show()
   $("#2-player-start").hide()
   $("#select-game").remove()
}) }

function playerTwoSelection() {
  $("#two-player").on('click', function() {
    $("#ready").show()
  $("#2-player-start").show()
  $("#1-player-start").hide()
  $("#select-game").remove()
}) }



/* render play again button after game completion and show score */
