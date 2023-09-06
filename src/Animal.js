export default class Animal {
    constructor(species, energy) {
        this.species = species
        this.energy = energy
    }

    makeSound () {
        if(this.species === 'monkey') {
            console.log(`${this.species} made a sound`)
            this.energy -= 4
        } else if (this.energy < 0) {
            console.log('No energy left.') 
        } else {
            console.log(`${this.species} made a sound`)
            this.energy -= 3
        }
    }

    eat(food){
        if (food === 'grain' && this.species === 'tiger') {
            console.log('Do not feed the Tiger with grain.')
        } else if (this.species === 'monkey') {
            console.log(`The ${this.species} ate ${food}`)
            this.energy += 2
        } else {
            console.log(`The ${this.species} ate ${food}`)
            this.energy += 5
        }
    }

    sleep(){
        if(this.species === 'tiger') {
            console.log(`The ${this.species} slept`)
            this.energy += 5
        } else {
            console.log(`The ${this.species} slept`)
            this.energy += 10
        }
    }

    reportEnergy() {
        console.log(`The ${this.species} has ${this.energy} of energy left`)
    }
}