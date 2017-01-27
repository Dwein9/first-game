
$(document).ready(()=>{
  $("#startbutton").click(()=>{
      $("#game").show()
    let game = new Game()
    game.pictureCycler()
    $("#startbutton").fadeOut()
    })
})
/* render play again button after game completion and show score */
