
$(document).ready(()=>{
  $("#startbutton").click(()=>{
      $("#gameboard").show()
    let game = new Game()
    game.pictureCycler()
    $("#startbutton").fadeOut()
    })
})
/* render play again button after game completion and show score */
