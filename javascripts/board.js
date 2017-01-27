class Board {
  constructor(){
    this.positions = ["NO", "YES"]
    this.stuffToShow = ["images/triangle-outline-512.png", "images/octagon-512.png", "images/circle-outline-512.png", "images/star-8-512.png","images/octagon-outline-512.png","images/square-outline0512.png"] // each is an image object???
    this.shown = []
  }

  pictureCycler(){
    var promise = $.when();
    var self = this;
    for(let i = 0; i < 100; i++){
      promise = promise.then(function(element){
        if(element){
          $(`#${i-1}`).hide()
        }
        // var idea = Math.floor((Math.random() * self.stuffToShow.length) + 1);
        var idea = self.getRandomNumber();
        self.shown.push(self.stuffToShow[idea])
        return $('#picture').append(self.renderImg(self.stuffToShow[idea], i)).promise();
      })
    }
  }
 getRandomNumber() {
  //  debugger
  // var max1 = self.stuffToShow.length
  var min = Math.ceil(0);
  var max = Math.floor(5)
  return Math.floor(Math.random() * (max - min)) + min
}

  // pictureCycler() {
  //   // window.setTimeout(function() {
  //   //   this.stufftoShow.forEach((image, index)=>{
  //   //   })
  //   // var img = this.stufftoShow[0]
  //   // var self = this;
  //   this.stufftoShow.forEach((image,index) => {
  //     window.setTimeout(this.renderImg(image, 0), 10000)
  // })
// }
   renderImg(image, index){
     Materialize.toast(`${index}`, 900)
     $("#picture").delay(2500).append(`<img class ="animated rollOut" id=${index} src=${image}></img>`)

   }
}



  // render(){
  //   let $board = $('#board')
  // }
