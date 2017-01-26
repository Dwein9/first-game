class Board {
  constructor(){
    this.positions = ["+", "+"]
  }

  render(callback){
    let $board = $('#board')
    this.positions.forEach((position, i) => {
      // let square = new Square(position)
      // $board.append(square.render())
      $board.append(`<div class="square" id="${i}">${position}</div>`)
    })
    callback()
  }

}
