import Animal from './Animal.js'

export default class Monkey extends Animal {
    constructor(energy) {
        super('monkey', energy)
    }

    play() {
        if (this.energy < 8) {
            console.log('Monkey is too tired.')
        } else {
            console.log('Oooo Oooo Oooo')
            this.energy -= 8
        }
    }
}