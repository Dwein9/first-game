
$(document).ready(()=>{
  $("#startbutton").click(()=>{
    let game = new Game()
    game.pictureCycler()
    $("#startbutton").fadeOut()
    })
})
