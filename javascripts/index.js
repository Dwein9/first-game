
$(document).ready(()=>{
  $("#startbutton").click(()=>{
      $("#gameboard").show()
    let game = new Game()
    $("#startbutton").fadeOut()
    var renderScores = game.pictureCycler()
    renderScores.then(() =>{
       game.renderScores()
     })
  })
})
/* render play again button after game completion and show score */
