$(document).ready(() => {
   playerOneSelection()
   playerTwoSelection()

    $("#startbutton").on("click",startgame)
      $("#startbutton2").click(() => {
        $("li").remove()
        $("#scores").hide()
        startgame()
      })
})


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
  game.clicked.length = 0
}

function playerOneSelection() {
  $("#one-player").on('click', function() {
   $("#start").show()
   $("#select-game").remove()
  //  $("#one-player").remove()
    alert('One Player Game');
}) }

function playerTwoSelection() {
  $("#two-player").on('click', function() {
    // render 2P game
   $("#start").show()
   $("#select-game").remove()
  //  $("#one-player").remove()
    alert('Two Player Game');
}) }



/* render play again button after game completion and show score */
