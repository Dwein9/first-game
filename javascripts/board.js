class Board {
  constructor(){
    this.positions = ["NO", "YES"]
    this.stuffToShow = ["images/octagon-512.png", "images/octagon-512.png", "images/octagon-512.png", "images/octagon-512.png","images/octagon-512.png"] // each is an image object???
  }

  pictureCycler(){
    var promise = $.when();
    var self = this;
    for(let i = 0; i < this.stuffToShow.length; i++){
      promise = promise.then(function(element){
        if(element){
          $(`#${i-1}`).fadeOut(1)
        }
        return $('#picture').append(self.renderImg(self.stuffToShow[i], i))
          .delay(2000)
          .promise();
      })
    }
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
     $("#picture").append(`<div id=${index}><img src=${image}></div>`)
   }
}



  // render(){
  //   let $board = $('#board')
  // }
