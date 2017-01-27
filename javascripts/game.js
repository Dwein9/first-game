class Game {
  constructor(){
    this.positions = ["NO", "YES"]
    this.stuffToShow = ["images/triangle-outline-512.png", "images/octagon-512.png", "images/circle-outline-512.png", "images/star-8-512.png","images/octagon-outline-512.png","images/square-outline0512.png"]
    this.shown = []
  }

  pictureCycler(){
    var promise = $.when();
    var self = this;
    for(let i = 0; i < 6; i++){
      promise = promise.then(function(element){
        if(element){
          $(`#${i-1}`).hide()
        }
        var idea = self.getRandomNumber();
        self.shown.push(self.stuffToShow[idea])
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
