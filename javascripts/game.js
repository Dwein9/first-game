class Game {
  constructor(){
    this.positions = ["NO", "YES"]
    this.stuffToShow = ["images/F.png", "images/B.png", "images/A.png", "images/E.png","images/C.png","images/D.png"]
    this.shown = []
    this.clicked = []
    this.counter = 0
  }

  pictureCycler(){
    var promise = $.when();
    var self = this;
    for(let i = 0; i < 1000; i++){
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
          $(`#picture`).on("click", `#${self.shown.length}`, function(){
            debugger
          let j = this.src
          self.clicked.push(j.split('first-game/').pop())
          if (self.clicked[self.clicked.length-1] === self.shown[self.shown.length-3]){
            Materialize.toast(`Score: ${self.clicked.length}`, 500)
          }else {
            Materialize.toast("nah!", 500)}
          })

        return $('#picture').append(self.renderImg(self.stuffToShow[idea], i)).promise();
      })
    }
  }

 getRandomNumber() {
  var min = Math.ceil(0)
  var max = Math.floor(5)
  return Math.floor(Math.random() * (max - min)) + min
}
   renderImg(image, index){
     Materialize.toast(`${index}`, 900)
     $("#picture").delay(2500).append(`<img class ="animated rollOut" id=${index} src=${image}></img>`)

   }
}
