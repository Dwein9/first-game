class Game {
    constructor() {
        this.stuffToShow = ["images/F.png", "images/A.png", "images/E.png", "images/C.png"]
        this.shown = []
        this.clicked = []
        this.correct = []
        this.counter = 0
        this.runs = 6

    }

    pictureCycler(callback) {
        var promise = $.when();
        var self = this;
        for (let i = 1; i < this.runs; i++) {
            promise = promise.then(function(element) {
                if (element) {
                    $(`#${i-1}`).remove()
                }
                var idea = self.getRandomNumber();
                self.shown.push(self.stuffToShow[idea])

                if (self.shown.length > 2) {

                  self.trackCorrect()

                  $(`#picture`).one("click", `#${self.shown.length}`, function() {
                      let j = this.src
                      self.clicked.push(j.split('first-game/').pop())
                      if (self.clicked[self.clicked.length - 1] === self.shown[self.shown.length - 3]) {
                          Materialize.toast(`CORRECT +1: ${self.counter+=1}`, 500)
                      } else {
                          Materialize.toast(`WRONG -1: ${self.counter-=1}`, 500)
                      }
                  })
                }
                return $('#picture').append(self.renderImg(self.stuffToShow[idea], i)).promise();
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
        if (this.counter === this.correct.length) {
          $("ul").append(`<li> PERFECT SCORE </li>`)
        }
        $("ul").append(`<li> Player Score: ${this.counter}</li>`)
        $("ul").append(`<li> Number of shapes displayed: ${this.shown.length}</li>`)
        $("ul").append(`<li> Player Attempts: ${this.clicked.length}</li>`)
        $("ul").append(`<li> Highest Possible Score: ${this.correct.length}</li>`)
        $(`img#${this.runs-1}`).remove()
    }

    trackCorrect(){
      if (this.shown[this.shown.length - 1] === this.shown[this.shown.length - 3]) {
          this.correct.push(this.shown[this.shown.length - 1]) //changes self to this
      }
    }
}
