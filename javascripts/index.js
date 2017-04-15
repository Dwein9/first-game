$(document).ready(() => {
   OnePlayerSelect()

  playerTwoSelection()
    $("#startbutton-2P").on("click",startTwoPlayerGame)
    $("#play-again2").click(() => {
      $("li").remove()
      $("#scores").hide()
      startTwoPlayerGame()
    })
})

// function startTwoPlayerGame() {
//   $("#gameboard").show()
//     let game = new TwoPlayerGame()
//   resetGameBoard(game)
//   $("#2-player-start").remove()
//   var renderScores = game.pictureCycler()
//   renderScores.then(() => {
//       game.renderScores()
//   })
// }

function playerTwoSelection() {
  $("#two-player").on('click', function() {
    $("#ready").show()
    $("#1-player-start").show()
    $("#2-player-start").hide()
    $("#select-game").remove()
  })
}


function OnePlayerSelect() {
  $("#one-player").on('click', function() {
    playerOneSelection()
  })
}

function playerOneSelection() {
  $("#ready").show()
  $("#1-player-start").show()
  $("#2-player-start").hide()
  $("#select-game").hide()
  startPlayerOne()
}

function startPlayerOne() {
  $("#startbutton-1P").click(() => {
    startGame()
  })
}


function startGame() {
  $("#gameboard").show()
  $("#1-player-start").hide()
    let game = new Game()
    resetGame(game)
     game.pictureCycler()
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

  function resetGame(game){
    if (game.counter) {
       game.counter = 0 }
    game.correct.length = 0
    game.shown.length = 0
    if (game.clickedPlayerTwo){
      game.clickedPlayerTwo.length = 0
      game.clickedPlayerOne.length = 0
    } else{
        game.clicked.length = 0
      }
    }
