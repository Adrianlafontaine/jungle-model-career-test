export default class Animal {
    constructor(species, energy) {
        this.species = species
        this.energy = energy
    }

    makeSound () {
        if(this.species === 'monkey') {
            this.energy -= 4
        } else if (this.energy < 0) {
            console.log('No energy left.') 
        } else {
            this.energy -= 3
        }
    }

    eat(food){
        if (food === 'grain' && this.species === 'tiger') {
            console.log('Do not feed the Tiger with grain.')
        } else if (this.species === 'monkey') {
            this.energy += 2
        } else {
            this.energy += 5
        }
    }

    sleep(){
        if(this.species === 'tiger') {
            this.energy += 5
        } else {
            this.energy += 10
        }
    }

    reportEnergy() {
        console.log(`The ${this.species} has ${this.energy} of energy left`)
    }
}