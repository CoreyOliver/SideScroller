export class InputHandler {
    constructor(game) {
        this.game = game
        this.keys = []
        //key down listening
        window.addEventListener('keydown', e => {
            if((    e.key === 'ArrowDown' ||
                    e.key === 'ArrowUp' ||
                    e.key === 'ArrowLeft' ||
                    e.key === 'ArrowRight' ||
                    e.key === 'Enter'
                ) && this.keys.indexOf(e.key) === -1) {
                this.keys.push(e.key)
            } else if(e.key === 'd') this.game.debug = !this.game.debug
        })
        //release key listening
        window.addEventListener('keyup', e => {
            if( e.key === 'ArrowDown' ||
                e.key === 'ArrowUp' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight' ||
                e.key === 'Enter'   ){
                this.keys.splice(this.keys.indexOf(e.key),1)
            }
        })
    }
}