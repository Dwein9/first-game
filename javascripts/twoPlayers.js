class TwoPlayerGame {
    constructor() {
        this.stuffToShow = ["images/F.png", "images/A.png", "images/E.png", "images/C.png"]
        this.shown = []
        this.clickedPlayerOne = []
        this.clickedPlayerTwo = []
        this.correct = []
        this.counterPlayerOne = 0
        this.counterPlayerTwo = 0
        this.runs = 16

    }

    pictureCycler(callback) {
        var promise = $.when();
        var self = this;
        for (let i = 1; i < this.runs; i++) {
            promise = promise.then(function(element) {
                if (element) {
                    $(`#${i-1}`).remove()
                }
                var randomIndex = self.getRandomNumber();
                self.shown.push(self.stuffToShow[randomIndex])

                if (self.shown.length > 2) {

                  self.trackCorrect()


                    $(document).on("keydown", function (event) {
                      if (event.key === "z"){
                        $(document).off("keydown")
                          self.playerOneClick()
                      }
                    })
                    $(document).on("keydown",function (event) {
                     if (event.key === "/") {
                       $(document).off("keydown")
                         self.playerTwoClick()
                     }
                   } )

                    // $(`#picture`).one("click", `#${self.shown.length}`, function() {
                    //     self.playerTwoClick()
                    //   })
                  // $(document).one("keypress",function (event) {
                  //   if (event.which === 47 || event.which === 63) {
                  //       self.playerTwoClick()
                  //   } } )
            }
                return $('#picture').append(self.renderImg(self.stuffToShow[randomIndex], i)).promise();
            })
        }
        return promise
    }


    getRandomNumber() {
        var min = Math.ceil(0)
        var max = Math.floor(this.stuffToShow.length)
        return Math.floor(Math.random() * (max - min)) + min
    }

    renderImg(image, index) {
        Materialize.toast(`${index}`, 900)
        $("#picture").delay(2500).append(`<img class ="animated rollOut" id=${index} src=${image}></img>`)

    }

    renderScores() {
        $("#scores").show()
        $("#startbutton3").show()
        if (this.counter === this.correct.length) {
          $("ul").append(`<li> PERFECT SCORE </li>`)
        }
        $("ul").append(`<li> Player One Score: ${this.counterPlayerOne}</li>`)
        $("ul").append(`<li> Player Two Score: ${this.counterPlayerTwo}</li>`)
        $("ul").append(`<li> Number of shapes displayed: ${this.shown.length}</li>`)
        $("ul").append(`<li> Player One Attempts: ${this.clickedPlayerOne.length}</li>`)
        $("ul").append(`<li> Player Two Attempts: ${this.clickedPlayerTwo.length}</li>`)
        $("ul").append(`<li> Highest Possible Score: ${this.correct.length}</li>`)
        $(`img#${this.runs-1}`).remove()
    }

    trackCorrect(){
      if (this.shown[this.shown.length - 1] === this.shown[this.shown.length - 3]) {
          this.correct.push(this.shown[this.shown.length - 1]) //changes self to this
      }
    }

    playerOneClick(){
    //   $(`#picture`).one("click", `#${this.shown.length}`, function() {
          let j = $(`#picture`)[0].lastElementChild.src
          this.clickedPlayerOne.push(j.split('first-game/').pop())
          // debugger
          if (this.clickedPlayerOne[this.clickedPlayerOne.length - 1] === this.shown[this.shown.length - 3]) {
              Materialize.toast(`Player One +1: ${this.counterPlayerOne += 1}`, 500)
          } else {
              Materialize.toast(`Player One -1: ${this.counterPlayerOne -= 1}`, 500)
          }
      }

    playerTwoClick(){
    //   $(`#picture`).one("click", `#${this.shown.length}`, function() {
          let j = $(`#picture`)[0].lastElementChild.src
          this.clickedPlayerTwo.push(j.split('first-game/').pop())
          // debugger
          if (this.clickedPlayerTwo[this.clickedPlayerTwo.length - 1] === this.shown[this.shown.length - 3]) {
              Materialize.toast(`Player Two +1: ${this.counterPlayerTwo +=1}`, 500)
          } else {
              Materialize.toast(`Player Two -1: ${this.counterPlayerTwo -=1}`, 500)
          }
      }


}


// $(`#${self.shown.length}`).keypress(function (key) {
//   if (key.which === 90) {
//       self.userClick()
//   } } )
