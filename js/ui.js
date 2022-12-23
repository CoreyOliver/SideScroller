export class UI {
    constructor(game) {
        this.game = game
        this.fontSize = 30
        this.fontFamily = 'Creepster'
        this.livesImage = lives
    }

    draw(context) {
        context.font = this.fontSize + 'px ' + this.fontFamily
        context.textAlign = 'left'
        context.fillStyle = this.game.fontColor
        //score
        context.fillText('Score: ' + this.game.score, 20, 50)
        context.fillStyle = 'white'
        context.fillText('Score: ' + this.game.score, 20 +2, 50 +2)

        // timer
        context.font = this.fontSize * 0.8 + ' px' + this.fontFamily
        context.fillStyle = 'black'
        context.fillText('Time: ' + (this.game.time * 0.001).toFixed(1), 20, 80)
        context.fillStyle = 'white'
        context.fillText('Time: ' + (this.game.time * 0.001).toFixed(1), 20 + 2, 80 + 2)
        // lives
        for(let i = 0; i < this.game.lives; i++) {
            context.drawImage(this.livesImage, 30 * i + 20, 95, 25, 25)
        }
        // game over message
        if(this.game.gameOver){
        context.textAlign = 'center'
        context.font = this.fontSize * 4 + ' px' + this.fontFamily
            if((this.game.score > 5) && this.game.lives > 0) {
                context.fillStyle = 'black'
                context.fillText('Winner!!', this.game.width * 0.5, this.game.height * 0.5)
                context.fillStyle = 'white'
                context.fillText('Winner!!', this.game.width * 0.5 + 2, this.game.height * 0.5 + 2)

            } else {
                context.fillStyle = 'black'
                context.fillText('Better Luck Next Time', this.game.width * 0.5, this.game.height * 0.5)
                context.fillStyle = 'white'
                context.fillText('Better Luck Next Time', this.game.width * 0.5 + 2, this.game.height * 0.5 + 2)
            }
        }

    }

}