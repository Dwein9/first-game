$(document).ready(() => {
   playerOneSelection()
   playerTwoSelection()
    $("#startbutton").on("click",startgame)
      $("#startbutton2").click(() => {
        $("li").remove()
        $("#scores").hide()
        startgame()
      })
    $("#2-player-start").on("click",startTwoPlayerGame)
    $("#startbutton3").click(() => {
          $("li").remove()
          $("#scores").hide()
          startTwoPlayerGame()
        })
})

function startTwoPlayerGame() {
    $("#gameboard").show()
      let game = new TwoPlayerGame()
    resetGameBoard(game)
    $("#2-player-start").fadeOut()
    var renderScores = game.pictureCycler()
    renderScores.then(() => {
        game.renderScores()
    })
}

function startgame() {
    $("#gameboard").show()
      let game = new Game()
    resetGameBoard(game)
    $("#startbutton").fadeOut()
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
     $("#start").show()
   $("#startbutton").show()
   $("#2-player-start").hide()
   $("#select-game").remove()
}) }

function playerTwoSelection() {
  $("#two-player").on('click', function() {
  $("#start").show()
  $("#2-player-start").show()
  $("#startbutton").hide()
  $("#select-game").remove()
}) }



/* render play again button after game completion and show score */
