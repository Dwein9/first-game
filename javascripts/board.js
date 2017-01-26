class Board {
  constructor(){
    this.positions = ["NO", "YES"]
    this.stufftoShow = ["image1", "image2", "image3", "image4","image5"] // each is an image object???
  }


pictureCycler(){
  $("#picture").delay(1000).fadeOut(100)
}

  // render(){
  //   let $board = $('#board')
  // }

}
