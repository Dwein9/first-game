class Game {
    constructor() {
        this.stuffToShow = ["images/F.png", "images/A.png", "images/E.png", "images/C.png"]
        this.shown = []
        this.clicked = []
        this.correct = []
        this.counter = 0
        this.runs = 16
    }

    pictureCycler() {
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
                    $(`#picture`).one("click", `#${self.shown.length}`, function() {
                        self.userClick()
                    })
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
        $("#picture").delay(2500).append(`<img class ="responsive-img animated rollOut" id=${index} src=${image}></img>`)

    }

    renderScores() {
        $("#scores").show()
        $("#play-again").show()
        if (this.counter === this.correct.length) {
            $("ul").append(`<li> PERFECT SCORE </li>`)
        }
        $("ul").append(`<li> Player Score: ${this.counter}</li>`)
        $("ul").append(`<li> Number of shapes displayed: ${this.shown.length}</li>`)
        $("ul").append(`<li> Player Attempts: ${this.clicked.length}</li>`)
        $("ul").append(`<li> Highest Possible Score: ${this.correct.length}</li>`)
        $(`img#${this.runs-1}`).remove()
    }

    trackCorrect() {
        if (this.shown[this.shown.length - 1] === this.shown[this.shown.length - 3]) {
            this.correct.push(this.shown[this.shown.length - 1])
        }
    }

    userClick() {
        let pic = $(`#picture`)[0].lastElementChild.src
        this.clicked.push(pic.split('rollout/').pop())
        if (this.clicked[this.clicked.length - 1] === this.shown[this.shown.length - 3]) {
            Materialize.toast(`CORRECT +1: ${this.counter+=1}`, 500)
        } else {
            Materialize.toast(`WRONG -1: ${this.counter-=1}`, 500)
        }
    }
}
