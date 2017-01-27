class Game {
  constructor(){
    this.stuffToShow = ["images/F.png", "images/A.png", "images/E.png","images/C.png"]
    this.shown = []
    this.clicked = []
    this.correct = []
    this.counter = 0

  }

  pictureCycler(){
    var promise = $.when();
    var self = this;
    for(let i = 1; i < 10; i++){
      promise = promise.then(function(element){
        if(element){
          $(`#${i-1}`).hide()
        }
        var idea = self.getRandomNumber();
        self.shown.push(self.stuffToShow[idea])

        // if (self.shown.length <= 2) {
        //   $("#yes").hide()
        // } else {
        //   $("#yes").show()
        // }


        if (self.shown.length > 2)
          if (self.shown[self.shown.length-1] === self.shown[self.shown.length-3]){
            self.correct.push(self.shown[self.shown.length-1])
          }
          $(`#picture`).one("click", `#${self.shown.length}`, function(){
          debugger
          let j = this.src
          self.clicked.push(j.split('first-game/').pop())
          if (self.clicked[self.clicked.length-1] === self.shown[self.shown.length-3]){
            Materialize.toast(`CORRECT +1: ${self.counter+=1}`, 500)
          }else {
            Materialize.toast(`WRONG -1: ${self.counter-=1}`, 500)}
          })

        return $('#picture').append(self.renderImg(self.stuffToShow[idea], i)).promise();
      })
    }
  }

 getRandomNumber() {
  var min = Math.ceil(0)
  var max = Math.floor(4)
  return Math.floor(Math.random() * (max - min)) + min
}
   renderImg(image, index){
     Materialize.toast(`${index}`, 900)
     $("#picture").delay(2500).append(`<img class ="animated rollOut" id=${index} src=${image}></img>`)

   }
}
